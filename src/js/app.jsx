import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: 15,
      output: 0

    };
    this.calculate = this.calculate.bind(this);
    this.stateValues = this.stateValues.bind(this);
  }
  stateValues(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  calculate() {

    var p = this.state.balance;
    var r = this.state.rate * .01 / 12;
    var n = this.state.term;
    var total = n * 12;
    var d = p * ((r * Math.pow((1 + r), total)) / (Math.pow((1 + r), total) - 1));

    this.setState({ output: d.toFixed(2) });
  }

  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <div>
          <strong >Loan balance</strong><input type="number" name="balance" placeholder="type value here" value={this.state.balance} onChange={this.stateValues}></input>
        </div>
        <div><strong>Interest Rate (%)</strong> <input type="number" name="rate" placeholder="type your rate here" value={this.state.rate} onChange={this.stateValues}></input></div>
        <div><strong>Loan Term (years)</strong> <select type="number" name="term" value={this.state.term} onChange={this.stateValues}>
          <option value="15" type="number">15</option>
          <option value="30" type="number">30</option>
        </select></div>

        <button name="submit" className="btn btn-primary" onClick={this.calculate}>calculate</button>
        <div name="output" id="output" onChange={this.stateValues}>{`$${this.state.output} is your payment.`}</div>
      </div>
    );
  }
}


