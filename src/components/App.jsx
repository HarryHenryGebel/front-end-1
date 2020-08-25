import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";
import EventPage from "./EventPage";
import UserProfile from "./UserProfile";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <Route exact path="/" component={Dashboard} />

      <Route path="/event/:id">
        <EventPage />
      </Route>
      <Route path="/profile" component={UserProfile} />
    </>
  );
}
