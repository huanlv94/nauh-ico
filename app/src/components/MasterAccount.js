import React, { Component } from 'react'

class MasterAccount extends Component {

  render() {
    const { account } = this.props
    return (
        <div className="MasterAccount" >
          <h2> Nauh Coin Challenge Account </h2>
          <dl>
            <dt>Account number</dt>
            <dd>{account.number}</dd>
            <dt>Balance (Ether)</dt>
            <dd>{account.ethBalance}</dd>
          </dl>
          <hr />
        </div>
      ); 
  }
}

export default MasterAccount
