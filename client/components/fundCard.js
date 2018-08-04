import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './progressBar';

const FundCard = props => {
  const fund = props.fund;

  return (
    <div>
      <Link to={`/funds/${fund.id}`}>
        <img className="card-image" src={fund.imageUrl} />
        <h4>{fund.name}</h4>
      </Link>
      
      <br />
      
      
    </div>
  )
}

export default FundCard;


// <ProgressBar percentage={fund.percentage} />