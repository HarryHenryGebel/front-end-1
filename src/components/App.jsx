import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";
import EventPage from "./EventPage";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import createStoreHolder from "../classes/StateHolder";

function App(props) {
  // initialize state
  useEffect(() => new props.createStoreHolder());

  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/event/:id" render={(props) => <EventPage {...props} />} />
    </>
  );
}
export default connect(null, { createStoreHolder })(App);
