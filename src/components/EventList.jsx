//Will contain functions for Events
//Will hold the shape of the card-deck
//AddEvent will be in the DashBoardNavBar
import React from "react";
import { CardDeck, Spinner } from "reactstrap";
import Event from "./items/Event";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    potlucks: state.potlucks,
    isloading: state.isloading,
  };
};

function EventList(props) {

  return (
    <>
    {props.isloading ? <Spinner /> : null}
    <CardDeck>
      {props.potlucks.map((dinner) => {
        return (
          <Event
            key={dinner.potluckId}
            potluckId={dinner.potluckId}
            host={props.username}
            eventName={dinner.eventName}
            date={dinner.date}
            time={dinner.time}
            location={dinner.location}
            description={dinner.description}
            foods={dinner.foods}
            guests={dinner.guests}
            isHost={dinner.isHost}
          />
        );
      })}
    </CardDeck>
    </>
  );
}

export default connect(mapStateToProps, {})(EventList);
