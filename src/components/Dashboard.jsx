//Main Hub for PrivateRoute of App
//Will contain its own DashBoardNavBar
//Will display userData and eventData
//Will contain the Organizer's Events
//Will contain the Guest's Food Obligations
//Will contain and/or display a countdown for upcoming events ***Stretch***

import React from "react";
import EventList from './EventList'
import UserProfile from "./UserProfile";
import {connect} from 'react-redux'
import {Spinner} from 'reactstrap'

const mapStateToProps = (state) => {
  return {isLoading: state.isLoading}
}


//import PrivateRoute

function DashBoard(props) {
  return (
    <>
    {props.isLoading ? <Spinner />: null }
      {/* if logged in, show EventList. Else, show Login/Registration */}
      <UserProfile />
      <EventList />
    </>
  );
}

export default connect(mapStateToProps, {})(DashBoard)
