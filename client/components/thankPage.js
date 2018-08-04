import React from 'react';
import Link from 'react-router-dom';

const ThankPage = () => {
  return (
    <div>
      <h1>Thank You for donating</h1>
      <br />

      <Link to='/home'>
        <h3>Return Home</h3>
      </Link>
    </div>
  )
}

export default ThankPage;