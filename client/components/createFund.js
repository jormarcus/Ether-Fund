import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFund } from '../store/fund';

class CreateFund extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: 0,
      imageUrl: '',
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
    console.log('STATE', this.state);
    this.props.postFund(this.state);
    this.setState({ name: '', amount: '', imageUrl: '', description: '' });
    this.props.history.push('/fund');
  }

  render() {
    return (
      <div className="form-container">
        <form className="ui form">

          <div className="field">
            <input type='text' value={this.state.name} name='name' placeholder='Fund Name' onChange={this.handleChange} />
          </div>

          <div className="ui form massive right labeled input">
            <label htmlFor="amount" className="ui label">$</label>
            <input type="integer" placeholder="Goal Amount" id="amount" value={this.state.Amount} onChange={this.handleChange} />
            <div className="ui basic label">.00</div>
          </div>

          <div className="field form-space">
            <input type='text' value={this.state.imageUrl} name='imageUrl' placeholder='imageUrl' onChange={this.handleChange} />
          </div>

          <div className="field form-space">
            <textarea type='text' value={this.state.description} name='description' placeholder='Description' onChange={this.handleChange}></textarea>
          </div>

          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
      
    )
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    postFund: fund => { dispatch(postFund(fund, history)) }
  }
} 

export default connect(null, mapDispatchToProps)(CreateFund);

// <div className="">
//         <form onSubmit={this.handleSubmit}>
          
//           <div className="ui massive input">
//             <input type='text' value={this.state.fundName} name='fundName' placeholder='Fund name' onChange={this.handleChange} />
//           </div>
//           <br />
          
//           <div className="ui massive right labeled input">
//             <label htmlFor="amount" className="ui label">$</label>
//             <input type="text" placeholder="Amount" id="amount" value={this.state.Amount} onChange={this.handleChange} />
//               <div className="ui basic label">.00</div>
//           </div>
//           <br />

          // <div className="ui massive selection dropdown">
          //   <input type="hidden" value={this.state.category} name="category" placeholder='Choose a category' onChange={this.handleChange} />
          //     <i className="dropdown icon" />
          //     <select name="states" className="ui selection dropdown" multiple="" id="multi-select">
          //     <option value="">States</option>
          //     <option value="1">Accidents & Emergencies</option>
          //     <option value="5">Medical, Illness & Healing</option>
          //     <option value="2">Business & Entrepreneurs</option>
          //     <option value="3">Education & Learning</option>
          //     <option value="4">Funerals & Memorials</option>
          //     <option value="6">Non-Profits & Charities</option>
          //     <option value="7">Sports, Teams & Clubs</option>
          //     <option value="8">Travel & Adventure</option>
          //     <option value="9">Other</option>   
          //   </select>
          // </div>

//           <div className="ui massive input">
//             <input type='text' value={this.state.description} name='description' placeholder='Description' onChange={this.handleChange} />
//           </div>

//         </form>
//       </div>