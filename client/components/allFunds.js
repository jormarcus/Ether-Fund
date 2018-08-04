import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFunds } from '../store/fund';
import FundCard from './fundCard';

class AllFunds extends Component {

  componentDidMount() {
    this.props.fetchFunds();
  }
  
  render() {
    const { funds } = this.props;
    return (
      <div className="content-section center">
        <div className="funds-top grid-container">
        <h1>Browse {funds.category} fundraisers</h1>
        <br />
        <Link to="/create">
          <button className="ui blue massive button">Start an Ether-Fund</button>
        </Link>
        <br />
        </div>

        <div id="funds-container" className="ui grid align-center">
          {funds.map(fund => {
            return (
              <FundCard key={fund.id} fund={fund} />
            )
          }
            ) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    funds: state.fundReducer.funds,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFunds: () => dispatch(fetchFunds())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFunds);