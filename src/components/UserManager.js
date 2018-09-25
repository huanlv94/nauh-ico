import React, { Component } from "react"

import Accounts from './Accounts'
// web3 lib
import getWeb3 from '../utils/getWeb3'
// Contracts
import NauhToken from '../../build/contracts/NauhToken.json'
import NauhCrowdsale from '../../build/contracts/NauhCrowdsale.json'
import axios from 'axios'

const contract = require('truffle-contract')

class UserManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      nauhPrice: 0.01
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance
    // Setup contracts once web3 is available

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });
        this.setupContracts();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });
  }

  setupContracts() {
    const { web3 } = this.state;
    let nauhToken = contract(NauhToken);
    nauhToken.setProvider(web3.currentProvider);
    let nauhCrowdsale = contract(NauhCrowdsale);
    nauhCrowdsale.setProvider(web3.currentProvider);

    nauhCrowdsale.deployed().then(instance => {
      const nauhCrowdsaleInstance = instance;
      this.setState({ nauhCrowdsaleInstance });
      nauhCrowdsaleInstance.token().then(tokenAddress => {
        this.setState({ nauhInstance: nauhToken.at(tokenAddress) });
        this.fetchAccounts();
      });
    });
  }

  getEthBalance(address) {
    const { web3 } = this.state;
    let balance = 0;
    web3.eth.getBalance(address, function(error, wei) {
      if (!error)
        balance = web3.utils.fromWei(wei, "ether")
    })
  
    return parseFloat(balance).toFixed(4)
  }

  getEthBalanceFromAPI(address) {
    // https://api-ropsten.etherscan.io/api?module=account&action=balance&address=0x95fcaf758702247786e30478fff2f089a438e5c9&tag=latest&apikey=G6EK3IGSTSNA5Q9TTCXIHS5GG26T94ZH28

    let params = {
      module: 'account',
      action: 'balance',
      address: address,
      tag: 'latest',
      apikey: 'G6EK3IGSTSNA5Q9TTCXIHS5GG26T94ZH28'
    }

    axios.get('https://api-ropsten.etherscan.io/api', {
      params: params
    })
      .then(function (response) {
        let { result } = response.data
        console.log(result)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  fetchAccounts() {
    const { web3, nauhInstance, nauhPrice } = this.state
    // Get accounts and their balance
    web3.eth.getAccounts((error, accounts) => {
      // Fetch NAUH balance for all accounts
      Promise.all(accounts.map(account =>
          nauhInstance.balanceOf(account).then(balance => {
            return balance.toString(10)
          })
        )).then(balances => {
        // Store accounts in state
        let _accounts = accounts.map((account, idx) => {
          let ethBlc = this.getEthBalance(account)
          // let nauhBalance = Math.round(web3.utils.fromWei((balances[idx] / nauhPrice).toString(), "ether"))
          let nauhBalance = parseFloat(web3.utils.fromWei(balances[idx].toString(), "ether")).toFixed(4)
          return { name: "Your account number:", number: account, nauhBalance: nauhBalance, ethBalance: ethBlc }
        })
        this.setState({ accounts: _accounts })
      })
    })
  }

  handleBuyNAUH(account) {
    const { web3, nauhCrowdsaleInstance, nauhPrice } = this.state;
    /////////////////////////////////////////////////
    nauhCrowdsaleInstance
      .sendTransaction({
        from: account,
        value: web3.utils.toWei(nauhPrice.toString(), "ether"),
        gas: "220000"
      })
      .then(
        function success(data) {
          this.fetchAccounts();
        }.bind(this),
        function failure(error) {
          console.error(error);
        }
      );
  }

  render() {
    const { accounts } = this.state;

    return (
      <main className="container">
        <div>
          <div>
            <Accounts
              onBuy={this.handleBuyNAUH.bind(this)}
              accounts={accounts}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default UserManager
