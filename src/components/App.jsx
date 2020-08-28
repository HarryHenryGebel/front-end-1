import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";
import EventPage from "./EventPage";
import PrivateRoute from './PrivateRoute'

export default function App() {
  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/event/:id" render={(props) => <EventPage {...props} />} />
    </>
  );
}
