import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0
    }
    this.addDeposit = this.addDeposit.bind(this);
    this.withdrawMoney = this.withdrawMoney.bind(this);
  }

    addDeposit(e){
      e.preventDefault;
      let amount = parseInt(this.inputBox.value, 10);
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = "";
    }

    withdrawMoney(e){
      e.preventDefault;
      let amount = parseInt(this.inputBox.value, 10);
      if (amount > this.state.balance) {
        alert("Sorry bud, you're not that rich")
      } else {
        let newBalance = this.state.balance - amount;
        this.setState({
          balance: newBalance
        })
      }
      this.inputBox.value= "";
    }

  render() {
    let balanceClass = "balance";
    if (this.state.balance === 0) {
      balanceClass += "zero";
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.addDeposit(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.withdrawMoney(e)} />
      </div>
    )
  }
}
