import react from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './progressBar';

const FundCard = props => {
  const fund = props.fund;

  return (
    <div>
      <img src={fund.imageUrl} />
      <h4>{fund.city}{fund.state}</h4>
      <h4>{fund.title}</h4>
      
      <br />
      
      <ProgressBar percentage={fund.percentage} />
    </div>
  )
}

export default FundCard;