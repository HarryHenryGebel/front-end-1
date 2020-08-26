//Main Hub for PrivateRoute of App
//Will contain its own DashBoardNavBar
//Will display userData and eventData
//Will contain the Organizer's Events
//Will contain the Guest's Food Obligations
//Will contain and/or display a countdown for upcoming events ***Stretch***

import React from "react";
import EventList from './EventList'
import UserProfile from "./UserProfile";
import CreateEvent from "./forms/CreateEvent";


//import PrivateRoute

export default function DashBoard() {
  return (
    <>
      {/* if logged in, show EventList. Else, show Login/Registration */}
      <UserProfile />
      <EventList />
    </>
  );
}
