import React, { Component } from 'react'
class AccountItem extends Component {

  buyNauhCoin(account) {
    this.props.onBuy(account);
  }

  render() {
    const { account } = this.props
    return (
      <div className="Account">
        <h3> {account.name} </h3>
        <dl>
          <dt>Account number</dt>
          <dd>{account.number}</dd>
          <dt>Balance (Ether)</dt>
          <dd>{account.ethBalance}</dd>
          <dt>Balance (Nauh Coin)</dt>
          <dd>{account.nauhBalance}</dd>
        </dl>
        <button onClick={this.buyNauhCoin.bind(this, account.number)}>
          Buy NAUH Coin
        </button>
        <hr />
      </div>
    );
  }
}

export default AccountItem
