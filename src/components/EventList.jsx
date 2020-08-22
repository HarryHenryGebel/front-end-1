//Will contain functions for Events
//Will hold the shape of the card-deck
//AddEvent will be in the DashBoardNavBar
import React from "react";
import { CardDeck } from "reactstrap";
import Event from "./Event";

function EventList() {
  return (
    <CardDeck>
      <Event />
    </CardDeck>
  );
}

export default EventList;
