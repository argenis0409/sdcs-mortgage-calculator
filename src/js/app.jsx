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
    if (this.state.balance === '') {
      alert("please type loan balance")
      return false;
    } else if (this.state.rate === '') {
      alert("please type interest rate")
      return false;
    }

    var p = this.state.balance;
    var r = this.state.rate * .01 / 12;
    var n = this.state.term;
    var total = n * 12;
    var d = p * ((r * Math.pow((1 + r), total)) / (Math.pow((1 + r), total) - 1));

    this.setState({ output: d.toFixed(2) });
  }

  render() {
    return (
      <div className="container">
        <div className='panel panel-default'>
          <h3>Mortgage Calculator</h3>

          <div className="panel-body">
            <strong> Loan Balance: </strong> <input name="balance" type="number" value={this.state.balance} onChange={this.stateValues} placeholder="type loan balance" className="form-lg input-md" />
          </div>
          <br />

          <div>
            <strong> Interest Rate (%): </strong> <input name="rate" type="number" step="0.01" value={this.state.rate} onChange={this.stateValues} placeholder="type interest rate" />
          </div>
          <br />

          <div>
            <strong>Loan Term (years)</strong> <select name="term" value={this.state.term}>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </div>

          <br />
          <div>
            <button className="btn btn-primary" name="submit" onClick={this.calculate}>Calculate</button>
          </div>
          <br />

          <div className="well well-md" id="output" name="output">{`$${this.state.output} is your payment.`}</div>

        </div>
      </div>
    );
  }
}


