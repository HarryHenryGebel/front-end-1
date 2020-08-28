//Main Hub for PrivateRoute of App
//Will contain its own DashBoardNavBar
//Will display userData and eventData
//Will contain the Organizer's Events
//Will contain the Guest's Food Obligations
//Will contain and/or display a countdown for upcoming events ***Stretch***

import React from "react";
import EventList from "./EventList";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import { useEffect } from "react";
import { axiosWithAuth } from "../utils";

const mapStateToProps = (state) => {
  return { isLoading: state.isLoading };
};

//import PrivateRoute

function DashBoard(props) {

  useEffect( () => {
    const username = localStorage.getItem('username')
    axiosWithAuth()
    .get('/users/users')
    .then(res=> {
      for(let i = 0; i < res.data.length; i++){
        if (res.data[i].username === username){
          const userdata = res.data[i]
          localStorage.setItem('userId', userdata.userid)
          localStorage.setItem('primaryemail', userdata.primaryemail)

        }
      }
    })
    .catch(e => console.log("why", e))
  })
  return (
    <>
      {props.isLoading ? <Spinner /> : null}
      {/* if logged in, show EventList. Else, show Login/Registration */}
      <UserProfile />
      <EventList />
    </>
  );
}
export const LOAD_USER = "LOAD_USER"
export default connect(mapStateToProps, {})(DashBoard);
