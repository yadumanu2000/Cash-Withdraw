// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    Balance: 2000,
  }

  fifty = () => {
    // eslint-disable-next-line
    const {Balance} = this.state
    this.setState(prevState => ({Balance: prevState.Balance - 50}))
  }

  hundred = () => {
    // eslint-disable-next-line
    const {Balance} = this.state
    this.setState(prevState => ({Balance: prevState.Balance - 100}))
  }

  twohunred = () => {
    // eslint-disable-next-line
    const {Balance} = this.state
    this.setState(prevState => ({Balance: prevState.Balance - 200}))
  }

  fivehundred = () => {
    // eslint-disable-next-line
    const {Balance} = this.state
    this.setState(prevState => ({Balance: prevState.Balance - 500}))
  }

  render() {
    // eslint-disable-next-line
    const {Balance} = this.state
    return (
      <div className="main-container">
        <div className="second-container">
          <div className="profile-container">
            <p className="Logo">S</p>
            <h1 className="Name">Sarah Williams</h1>
          </div>
          <div className="Balance-container">
            <p className="Balance">Your Balance</p>
            <div className="amount-container">
              <h1 className="amount">{Balance}</h1>
              <p className="Rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="heading">Withdraw</h1>
            <p className="para">CHOOSE SUM(IN RUPEES)</p>
          </div>
          <div className="Button-container">
            <div className="button-row">
              <button type="button" className="btn" onClick={this.fifty}>
                50
              </button>
              <button type="button" className="btn" onClick={this.hundred}>
                100
              </button>
            </div>
            <div className="button-row">
              <button type="button" className="btn" onClick={this.twohunred}>
                200
              </button>
              <button type="button" className="btn" onClick={this.fivehundred}>
                500
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
