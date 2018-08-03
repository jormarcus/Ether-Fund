import react, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFunds } from '../store/fund';

class FundsByCategory extends Component {
  
  render() {

    const { funds } = this.props;

    return (
      <div>
        <h1>Browse {funds.category} fundraisers</h1>
        <br />
        <Link to="/create">
          <button>Start an Ether-Fund</button>
        </Link>
        <br />

        <div>
        {funds.map(fund => (<fundCard key={fund.id} fund={fund} />)) }
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

export default connect(mapStateToProps, mapDispatchToProps)(FundsByCategory);