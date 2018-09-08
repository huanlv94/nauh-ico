import React, { Component } from 'react'
// Components
import Accounts from './components/Accounts'
// web3 lib
import getWeb3 from './utils/getWeb3'
// Contracts
import NauhToken from "../build/contracts/NauhToken.json"
import NauhCrowdsale from "../build/contracts/NauhCrowdsale.json"

const contract = require('truffle-contract')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      nauhPrice: 0.00001
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance
    // Setup contracts once web3 is available

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })
        this.setupContracts()
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  setupContracts() {
    const { web3 } = this.state
    let nauhToken = contract(NauhToken)
    nauhToken.setProvider(web3.currentProvider)
    let nauhCrowdsale = contract(NauhCrowdsale)
    nauhCrowdsale.setProvider(web3.currentProvider)

    nauhCrowdsale.deployed().then(instance => {
      const nauhCrowdsaleInstance = instance
      this.setState({ nauhCrowdsaleInstance })
      nauhCrowdsaleInstance.token().then(tokenAddress => {
        this.setState({ nauhInstance: nauhToken.at(tokenAddress) })
        this.fetchAccounts()
      });
    });
  }

  getBalance(address) {
    const { web3 } = this.state
    let balance = 0
    web3.eth.getBalance(address, function (error, wei) {
      if (!error) {
        balance = web3.fromWei(wei, 'ether')
      }
    })

    return Math.round(balance.toString())
  }

  fetchAccounts() {
    const { web3, nauhInstance, nauhPrice } = this.state
    // Get accounts and their balance
    web3.eth.getAccounts((error, accounts) => {
      // Fetch NAUH balance for all accounts
      Promise.all(
        accounts.map(account =>
          nauhInstance.balanceOf(account).then(balance => {
            return balance.toString(10)
          })
        )
      ).then(balances => {
        // Store accounts in state
        let _accounts = accounts.map((account, idx) => {
          let ethBlc = this.getBalance(account)
          return {
            name: "Your account number " + idx,
            number: account,
            nauhBalance: Math.round(web3.fromWei(balances[idx] / (nauhPrice), "ether")),
            ethBalance: ethBlc
          }
        })

        this.setState({ accounts: _accounts })
      });
    });
  }

  handleBuyNAUH(account) {
    const { web3, nauhCrowdsaleInstance, nauhPrice } = this.state
    /////////////////////////////////////////////////
    nauhCrowdsaleInstance.sendTransaction({
      from: account,
      value: web3.toWei(nauhPrice, "ether"),
      gas: "220000"
    }).then(function success(data) {
      this.fetchAccounts()
    }.bind(this), function failure(error) {
      console.error(error)
    });
  }


  render() {
    const { accounts } = this.state

    return <div className="App">
        <nav className="navbar">
          <a href="#">
            Nauh Coin ICO
          </a>
        </nav>

        <main className="container">
          <div>
            <div>
              <p>Use the buttons below to purchase Nauh Coins!</p>
              <Accounts onBuy={this.handleBuyNAUH.bind(this)} accounts={accounts} />
            </div>
          </div>
        </main>
      </div>;
  }
}

export default App
