import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchfield } from '../actions'; // import actions
import MainPage from '../components/MainPage'


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => { // recieves a state
  return {
      searchField: state.searchRobots.searchField, // return object coming from reducer
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => { // dispatch sends action from mapStateToProps
  return {
      onSearchChange: (event) => dispatch(setSearchfield(event.target.value)), // check event for text input change from searchfield
      //onRequestRobots: () => requestRobots(dispatch)
      onRequestRobots: () => dispatch(requestRobots())        
  }
}

class RobotApp extends Component {
  render() {
    return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RobotApp)
