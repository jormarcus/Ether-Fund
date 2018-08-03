import react from 'react';
import { Link } from 'react-router-dom';
import fundReducer from '../store/fund';
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