import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";
import EventPage from "./EventPage";
import { Route } from "react-router-dom";

import StateHolder from "../classes/StateHolder";

export default function App() {
  useEffect(() => new StateHolder());

  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/event/:id" render={(props) => <EventPage {...props} />} />
    </>
  );
}
