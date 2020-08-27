//will contain all data for the upcoming event
//if user === host, card will contain complete GuestList (RSVP true/false)
//if user === host, card will contain access to foods being brought and who is bringing food

//if user === guest, card will contain googleMap location, date and time
//if user === guest, card will contain their food obligation && stretch - recipe(Josh)

//may need to break component down further

//ADD ALERT TO CONFIRM EVENT CANCELLATION
import React, { Fragment, useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import EditEvent from "../forms/EditEvent";
import { deleteEvent } from "../../actions";
import { connect } from "react-redux";
import Food from "./Food";
import { useFinder } from "../../utils";

const mapStateToProps = (state) => {
  return { primaryEmail: state.primaryEmail };
};

function Event(props) {
  const {
    dinner,
    isHost,
    eventName,
    date,
    time,
    location,
    description,
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const {
    specificId,
    claimedFoods,
    unclaimedFoods,
    guestList,
    unresponsive,
    obligation,
    guestIdFinder,
    foodSorter,
    guestSorter,
    obligationFinder,
  } = useFinder();

  const guestFormValues = {
    guestId: specificId,
    isAttending: true,
    isBringing: obligation,
  };

  const [guestUpdate, setGuestUpdate] = useState(guestFormValues);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const foodUpdateHandler = (e) => {
    setGuestUpdate({
      ...guestUpdate,
      isBringing: [...guestUpdate.isBringing, e.target.value],
    });
  };
  guestIdFinder(props.primaryEmail, dinner);
  obligationFinder();
  guestSorter(dinner);
  foodSorter(dinner);
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>{eventName}</h2>
          </CardTitle>
          <CardText>
            {date} at {time} <br />
            {location} <br />
          </CardText>
          {/*Button will Launch Modal */}
          <Button className="bg-addon" onClick={toggle}>
            More Information
          </Button>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{eventName}</ModalHeader>
        <Nav tabs>
          <NavItem>
            <NavLink
              /* className={{ active: activeTab === "1" }} */
              onClick={() => {
                toggleTab("1");
              }}
            >
              <h5>Information</h5>
            </NavLink>
          </NavItem>
          {isHost ? (
            <NavItem>
              <NavLink
                /* className={{ active: activeTab === "2" }} */
                onClick={() => {
                  toggleTab("2");
                }}
              >
                <h5>Guest List</h5>
              </NavLink>
            </NavItem>
          ) : null}

          {isHost ? null : (
            <NavItem>
              <NavLink
                /* className={{ active: activeTab === "3" }} */
                onClick={() => {
                  toggleTab("3");
                }}
              >
                <h5>Menu</h5>
              </NavLink>
            </NavItem>
          )}

          {isHost ? null : (
            <NavItem>
              <NavLink
                /* className={{ active: activeTab === "4" }} */
                onClick={() => {
                  toggleTab("4");
                }}
              >
                <h5>Bring More</h5>
              </NavLink>
            </NavItem>
          )}

          {isHost ? (
            <NavItem>
              <NavLink
                /* className={{ active: activeTab === "5" }} */
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
                <ModalBody>
                  {description}

                  <Modal
                    isOpen={nestedModal}
                    toggle={toggleNested}
                    onClosed={closeAll ? toggle : undefined}
                  >
                    <ModalHeader>
                      <h2>Cancel Event Name?</h2>
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you wish to cancel this event?
                    </ModalBody>
                    <ModalFooter>
                      <Button className="bg-confirm" onClick={toggleNested}>
                        Nevermind
                      </Button>{" "}
                      <Button className="bg-cancel" onClick={toggleAll}>
                        Yes, I'm Sure
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>

                <ModalFooter>
                  <Button className="bg-cancel" onClick={toggle}>
                    Close
                  </Button>
                </ModalFooter>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                {/*map guest list to card, for event organizer only? */}
                <Card>
                  {guestList.map((guest) => (
                    <Fragment key={guest.guestId}>
                      {guest.firstName} {guest.lastName} is bringing:{" "}
                      {guest.isBringing.map((food) => (
                        <Fragment key={food.foodId}>
                          {" "}
                          {food.foodname}
                          <br />{" "}
                        </Fragment>
                      ))}
                      !
                    </Fragment>
                  ))}
                  {unresponsive.map((guest) => (
                    <Fragment key={guest.guestId}>
                      You are waiting for responses from : {guest.firstName}{" "}
                      {guest.lastName} <br />
                    </Fragment>
                  ))}
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Card>
                  <CardTitle>
                    <h6>Menu</h6>
                  </CardTitle>

                  {claimedFoods.map((food) => (
                    <Fragment key={food.foodId}>
                      <Food key={food.foodid} foodname={food.foodname} />{" "}
                      <Button className="bg-addon">
                        Search Recipe?(stretch)
                      </Button>{" "}
                    </Fragment>
                  ))}
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <Card>
                  {unclaimedFoods.map((food) => (
                    <Fragment key={food.foodId}>
                      <Food key={food.foodid} foodname={food.foodname} />{" "}
                      {/* Change onClick to onSubmit */}
                      <Button className="bg-addon" onClick={foodUpdateHandler}>
                        Claim
                      </Button>{" "}
                    </Fragment>
                  ))}
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            {/*Host Only */}

            <EditEvent />
            <Button className="bg-cancel" onClick={toggleNested}>
              Cancel Event
            </Button>
          </TabPane>
        </TabContent>
      </Modal>
    </>
  );
}

export default connect(mapStateToProps, { deleteEvent })(Event);
