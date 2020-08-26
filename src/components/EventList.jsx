//Will contain functions for Events
//Will hold the shape of the card-deck
//AddEvent will be in the DashBoardNavBar
import React from "react";
import { CardDeck } from "reactstrap";
import Event from "./items/Event";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    primaryemail: state.primaryemail,
    potlucks: state.potlucks,
  };
};

function EventList(props) {
  return (
    <CardDeck>
      {props.potlucks.map((dinner) => {
        return (
          <Event
            key={dinner.potluckid}
            potluckid={dinner.potluckid}
            host={props.username}
            eventname={dinner.eventname}
            date={dinner.date}
            time={dinner.time}
            location={dinner.location}
            description={dinner.description}
            foods={dinner.foods}
            guests={dinner.guests}
            ishost={dinner.ishost}
          />
        );
      })}
    </CardDeck>
  );
}

export default connect(mapStateToProps, {})(EventList);
