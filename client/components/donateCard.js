import React from 'react';
import { Link } from 'react-router-dom';
import postFund from '../store/fund'; //why am i importing this
import progressBar from './progressBar';

const donateCard = props => {
  return (

    <div>
      <h2>$amountDonated out of $amountGoal</h2>

      <Link to="/donate">
        <button>Donate Now</button>
      </Link>
    </div>

  )
}

export default donateCard;