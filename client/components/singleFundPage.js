import react, { Component } from 'react';
import { fetchSingleFund, removeFund } from '../store/fund';
import DonateCard from './donateSquare'
import { connect } from 'http2';

class SingleFund extends Component {
  constructor() {
    super();
    
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleFund(this.props.match.params.fundId);
  }

  //might need to be async
  handleDelete() {
    this.props.removeFund(this.props.match.params.fundId)
    this.props.history.push(`/home`);
  }

  render() {
    const { fund } = this.props;

    //might need to specify if(!fund) but if so, ask a fellow
    //also ask about fetch single fund route, may not be set up in the best way

    return (
      <div>
        <div>
          <img src={fund.imageUrl} />
          <h2>{fund.name}</h2>
        </div>

        <hr />
        <div>
          <h5>Description</h5>
          <p>{fund.description}</p>
        </div>

        <DonateCard fund={fund} />
      </div>
    )
  }
}

mapStateToProps = state => {
  return {
    fund: state.fundReducer.SingleFund
  }
}

mapDispatchToProps = dispatch => {
  return {
    fetchSingleFund: fundId => dispatch(fetchSingleFund(fundId)),
    removeFund: fundId => dispatch(removeFund(fundId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFund);