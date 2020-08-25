//Main Hub for PrivateRoute of App
//Will contain its own DashBoardNavBar
//Will display userData and eventData
//Will contain the Organizer's Events
//Will contain the Guest's Food Obligations
//Will contain and/or display a countdown for upcoming events ***Stretch***

import React from "react";
import EventList from "./EventList";
import EventPage from './EventPage'
import UserProfile from './UserProfile'
import { Route } from "react-router-dom";

//import PrivateRoute

export default function DashBoard() {
  return (
    <>
      {/* if logged in, show EventList. Else, show Login/Registration */}
      <Route exact path = "/dashboard">
        <EventList />
      </Route>
      <Route path = "/event/:id">
        <EventPage />
      </Route>
      <Route path = "/profile">
        <UserProfile />
      </Route>
    </>
  );
}
