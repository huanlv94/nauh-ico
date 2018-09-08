import React, { Component } from 'react'
import AccountItem from './AccountItem'

class Accounts extends Component {

  buyNauhCoin(account) {
    this.props.onBuy(account)
  }

  render() {
    const { accounts } = this.props
    let accountsItems
    if (accounts) {
      accountsItems = accounts.slice(1,5).map(account => {
        return (
          <AccountItem onBuy={this.buyNauhCoin.bind(this)} key={account.number} account={account} />
        )
      });
    }
    return (
      <div className="Accounts">
        <h2>Participants</h2>
        {accountsItems}
      </div>
    )
  }
}

export default Accounts
