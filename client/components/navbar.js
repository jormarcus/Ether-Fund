import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';

const Navbar = () => {

  return (
    <div>
      <nav className="nav-bar">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/create">Start an Ether-Fund</Link>
        </div>
      </nav>
    </div>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
//}

export default Navbar;

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// }



// <div> className="nav-bar nav-trans nav-container" data-background-switch-enabled="1">
//       <div className="nav-grid align-middle grid-x">
//         <div className="cell grid-x align-middle align-justify">


// className="nav-title">Ether-Fund