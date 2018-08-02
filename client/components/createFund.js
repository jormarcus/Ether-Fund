import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFund } from '../store/fund';

class CreateFund extends Component {
  constructor() {
    super();
    this.state = {
      fundName: '',
      goalAmount: 0,
      category: ''
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

          <input type='text' value={this.state.fundName} name='fundName' placeholder='Fund name' onChange={this.handleChange} />
          <br />
          
          <div className="ui input error right labeled">
            <input type='text' value={this.state.goalAmount} name='goalAmount' placeholder='1000' onChange={this.handleChange} />
          </div>
          <br />

          <div class="ui selection dropdown">
            <input type="hidden" value={this.state.category} name="category" placeholder='Choose a category' onChange={this.handleChange} />
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item" data-value="1">Male</div>
                <div class="item" data-value="0">Female</div>
              </div>
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

