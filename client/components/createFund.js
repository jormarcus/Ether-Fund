import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFund } from '../store/fund';

class CreateFund extends Component {
  constructor() {
    super();
    this.state = {
      fundName: '',
      amount: 0,
      category: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postFund(this.state);
    this.setState({ fundName: '', goalAmount: '', category: '' });
  }

  render() {
    return (
      <div className="create-form">
        <form onSubmit={this.handleSubmit}>
          
          <div className="ui massive input">
            <input type='text' value={this.state.fundName} name='fundName' placeholder='Fund name' onChange={this.handleChange} />
          </div>
          <br />
          
          <div className="ui massive right labeled input">
            <label htmlFor="amount" className="ui label">$</label>
            <input type="text" placeholder="Amount" id="amount" value={this.state.Amount} onChange={this.handleChange} />
              <div className="ui basic label">.00</div>
          </div>
          <br />

          <div className="ui massive selection dropdown">
            <input type="hidden" value={this.state.category} name="category" placeholder='Choose a category' onChange={this.handleChange} />
              <i className="dropdown icon" />
              <select name="states" className="ui selection dropdown" multiple="" id="multi-select">
              <option value="">States</option>
              <option value="1">Accidents & Emergencies</option>
              <option value="5">Medical, Illness & Healing</option>
              <option value="2">Business & Entrepreneurs</option>
              <option value="3">Education & Learning</option>
              <option value="4">Funerals & Memorials</option>
              <option value="6">Non-Profits & Charities</option>
              <option value="7">Sports, Teams & Clubs</option>
              <option value="8">Travel & Adventure</option>
              <option value="9">Other</option>   
            </select>
          </div>
          <br />

          <div className="ui massive input">
            <input type='text' value={this.state.description} name='description' placeholder='Description' onChange={this.handleChange} />
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postFund: fund => { dispatch(postFund(fund)) }
  }
} 

export default connect(null, mapDispatchToProps)(CreateFund);

