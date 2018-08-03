import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchFunds } from '../store/fund';

/**
 * COMPONENT
 */
export const UserHome = props => {
  console.log('props', props);
  const {email} = props

  return (
    <div>
      <h3>Welcome to Ether-Fund</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
