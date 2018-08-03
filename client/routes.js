import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import CreateFund from './components/createFund';
import DonatePage from './components/donatePage';
import FundsByCategory from './components/fundsByCategory';
import SingleFund from './singleFundPage';
import ThankPage from './thankPage';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/create" component={CreateFund} />
        <Route exact path="/funds" component={FundsByCategory} />
        <Route exact path="/funds/:fundId" component={SingleFund} />
        <Route exact path="/donate" component={DonatePage} />
        <Route exact path="/Thanks" component={ThankPage} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            
            <Route exact path="/create" component={createFund} />
            <Redirect to= '/home' />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}