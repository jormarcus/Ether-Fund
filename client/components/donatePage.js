import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editFundThunk } from '../store/fund';
// import web3 from './web3';
// import Fund from './fund';

class DonatePage extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  //make this async
  handleSubmit(event) {
    event.preventDefault();
    this.props.editFund(this.state.amount, this.props.match.params.fundId);

    // const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    // await Fund.methods.enter().send({
    //   from: accounts[0], 
    //   value: web3.utils.toWei(this.state.value, 'ether')
    // });

    this.props.history.push('./thankPage');
  }

  render() {
    return (
      <div>
        <input type="integer" placeholder="0" value={this.state.amount} onChange={this.handleChange} />
      </div>
    )
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    editFund: (fundId, amount) => dispatch(editFundThunk(fundId, amount))
  }
}
  


export default connect(null, mapDispatchToProps)(DonatePage);