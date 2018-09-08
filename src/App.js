import React, { Component } from 'react'
// Components
import Accounts from './components/Accounts'
import MasterAccount from './components/MasterAccount'
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
        var pplNames = ["Huân", "Lê", "Khánh", "Tài", "Sơn"]
        this.setState({
          accounts: accounts.slice(0, 5).map((account, idx) => {
            return {
              name: pplNames[idx],
              number: account,
              nauhBalance: web3.fromWei(balances[idx] / (nauhPrice), "ether"),
              ethBalance: Math.round(web3.fromWei(web3.eth.getBalance(account).toString(), "ether"))
            }
          })
        });
      });
    });
  }


  handleBuyNAUH(account) {
    const { web3, nauhCrowdsaleInstance, nauhPrice } = this.state
    // let msgParams = [
    //   {
    //     type: 'string',
    //     name: 'Message',
    //     value: 'Buy 1 Nauh Token ?'
    //   }
    // ]

    // let from = account // web3.eth.accounts[0]
    // let params = [msgParams, from]
    // let method = 'eth_signTypedData'

    // // web3.currentProvider.sendAsync({
    // //   method,
    // //   params,
    // //   from,
    // // }, function (err, result) {
    // //   if (err) return console.dir(err)
    // //   if (result.error) {
    // //     alert(result.error.message)
    // //   }
    // //   if (result.error) return console.error(result)
    // //   console.info('PERSONAL SIGNED:' + JSON.stringify(result.result))
    // // })
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
            New Nauh Coin Demo
          </a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h2>What can I do?</h2>
              <p>Use the buttons below to purchase Nauh Coins!</p>
              <MasterAccount account={accounts && accounts.length > 0 ? accounts[0] : {}} />
              <Accounts onBuy={this.handleBuyNAUH.bind(this)} accounts={accounts} />
            </div>
          </div>
        </main>
      </div>;
  }
}

export default App
