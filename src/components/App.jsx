import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <Dashboard />
    </>
  );
}
