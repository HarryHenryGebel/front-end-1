//will contain googlemaps location
//will contain special directions
//will contain CONFIRMED guest list
//will contain UNCOMFIRMED food

//will allow guests to click and accept unconfirmed food responsibilities
//will allow host to update params ONLY 24 HOURS NOTICE (otherwise, tis rude!)
//STRETCH will allow guests to UN-rsvp(but only with 24 hours notice) and re-add their food responsibilities (only in the params of cancellation, tis rude to not bring what you said you would!)

//ADD ALERT TO CONFIRM UPDATED EVENT
//ADD ALERT TO CONFIRM UN-RSVP
//ADD ALERT TO CONFIRM FOOD ADDITION?
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditEvent from "./forms/EditEvent";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import Food from "../components/items/Food";
import Guest from "../components/items/Guest";
import { updateEvent, deleteEvent } from "../actions";
import { connect } from "react-redux";
import { useFinder } from "../utils";

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    primaryEmail: state.primaryEmail,
    potlucks: state.potlucks,
  };
};

function EventPage(props) {
  const params = useParams();
  const { potlucks, primaryEmail } = props;
  //params is the id
  const {
    potluck,
    specificId,
    claimedFoods,
    unclaimedFoods,
    guestList,
    unresponsive,
    obligation,
    potluckFinder,
    guestIdFinder,
    foodSorter,
    guestSorter,
    obligationFinder,
  } = useFinder();

  const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const guestFormValues = {
    guestId: specificId,
    isAttending: true,
    isBringing: obligation,
  };

  const [guestUpdate, setGuestUpdate] = useState(guestFormValues);

  const foodUpdateHandler = (e) => {
    setGuestUpdate({
      ...guestUpdate,
      isBringing: [...guestUpdate.isBringing, e.target.value],
    });
  };

  potluckFinder(potlucks, params.id);
  guestIdFinder(primaryEmail, potluck);
  foodSorter();
  guestSorter();
  obligationFinder();

  return (
    <>
      {props.isLoading ? <Spinner /> : null}
      <div>
        <Container fluid>
          <img
            className="display-3"
            alt="dinner"
            src="https://picsum.photos/200"
            height="300vh"
            width="100%"
          />
          <H1>{Potluck.eventName}</h1>
          <p className="lead">
            {potluck.date} at {potluck.time}
          </p>
          <p className="lead">{potluck.location}</p>
        </Container>

        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "1" }}
                onClick={() => {
                  toggleTab("1");
                }}
              >
                <h5>Location Information</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "2" }}
                onClick={() => {
                  toggleTab("2");
                }}
              >
                <h5>Guest List</h5>
              </NavLink>
            </NavItem>
            {potluck.isHost ? null : (
              <NavItem>
                <NavLink
                  className={{ active: activeTab === "3" }}
                  onClick={() => {
                    toggleTab("3");
                  }}
                >
                  <h5>Bring Food</h5>
                </NavLink>
              </NavItem>
            )}

            {potluck.isHost ? null : (
              <NavItem>
                <NavLink
                  className={{ active: activeTab === "4" }}
                  onClick={() => {
                    toggleTab("4");
                  }}
                >
                  <h5>Change Your Mind?</h5>
                </NavLink>
              </NavItem>
            )}

            {potluck.isHost ? (
              <NavItem>
                <NavLink
                  className={{ active: activeTab === "5" }}
                  onClick={() => {
                    toggleTab("5");
                  }}
                >
                  <h5>Update Event</h5>
                </NavLink>
              </NavItem>
            ) : null}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <p>
                    {potluck.eventName} will be held at {potluck.time} on{" "}
                    {potluck.date} at {potluck.location}.
                  </p>
                  <p>
                    {/* This function is wrong. It should loop through to find the guest and post the guest's food. The function exists in Event.jsx */}{" "}
                    {potluck.isHost ? null : obligation.length > 0 ? (
                      obligation.map((food) => (
                        <>
                          You have told the host that you will be bringing:
                          <Food key={food.foodId} foodName={food.foodName} />
                        </>
                      ))
                    ) : (
                      <CardText>
                        {" "}
                        Please help your host and bring some food!{" "}
                      </CardText>
                    )}
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  {guestList.map((guest) => (
                    <>
                      <Guest
                        firstName={guest.firstName}
                        lastName={guest.lastName}
                        primaryEmail={guest.primaryEmail}
                      />
                      <br />
                    </>
                  ))}
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="6">
                  <Card body>
                    {unclaimedFoods.length > 0 ? (
                      unclaimedFoods.map((food) => (
                        <>
                          <Food key={food.foodId} foodName={food.foodName} />{" "}
                          <Button
                            className="bg-addon"
                            onClick={foodUpdateHandler}
                          >
                            Claim Food Item!
                          </Button>
                        </>
                      ))
                    ) : (
                      <CardText>All food is being</CardText>
                    )}
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="4">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>
                      <h2>Change your Mind?</h2>
                    </CardTitle>
                    <CardText>Minor Admonishment</CardText>
                    <Button className="bg-cancel" onClick={toggle}>
                      Cancel Event
                    </Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              {/* Put editEvent component inside modal. Too annoyed to do it now.*/}
              <Row>
                <Col sm="12">
                  <EditEvent />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <h2>Modal title</h2>
          </ModalHeader>
          <ModalBody>Confirm Cancellation? Your host will be sad.</ModalBody>
          <ModalFooter>
            <Button className="bg-confirm" onClick={toggle}>
              DO NOT CANCEL
            </Button>{" "}
            <Button className="bg-cancel" onClick={toggle}>
              Yes, Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default connect(mapStateToProps, { updateEvent, deleteEvent })(
  EventPage
);
