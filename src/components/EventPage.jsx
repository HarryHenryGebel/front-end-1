//will contain googlemaps location
//will contain special directions
//will contain CONFIRMED guest list
//will contain UNCOMFIRMED food

//will allow guests to click and accept unconfirmed food responsibilities
//will allow host to update event ONLY 24 HOURS NOTICE (otherwise, tis rude!)
//STRETCH will allow guests to UN-rsvp(but only with 24 hours notice) and re-add their food responsibilities (only in the event of cancellation, tis rude to not bring what you said you would!)

//ADD ALERT TO CONFIRM UPDATED EVENT
//ADD ALERT TO CONFIRM UN-RSVP
//ADD ALERT TO CONFIRM FOOD ADDITION?
import React, { useState } from "react";
import EditEvent from './forms/EditEvent'
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
} from "reactstrap";
import {updateEvent, deleteEvent} from '../actions'
import {connect} from 'react-redux'

function EventPage() {
  const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div>
        <Container fluid>
          <img
            className="display-3"
            alt="dinner"
            src="https://picsum.photos/200"
            height="300vh"
            width="100%"
          />
          <h1>Event Name</h1>
          <p className="lead">Date and Location</p>
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
            <NavItem>
              <NavLink
                className={{ active: activeTab === "4" }}
                onClick={() => {
                  toggleTab("4");
                }}
              >
                <h5>Change Your Mind? ONLY FOR GUEST</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "5" }}
                onClick={() => {
                  toggleTab("5");
                }}
              >
                <h5>Update Event ONLY FOR HOST</h5>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h6>
                    Location, Date, Time and What Food Item will be brought
                  </h6>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h6>
                    List of Guests and Photo (Bio?) - Easy Guest Identification
                    - Make new friends!
                  </h6>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle><h2>Unclaimed Menu Item</h2></CardTitle>
                    <CardText>Map over each item in list to display</CardText>
                    <Button className = "bg-addon">Claim Food Item!</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="4">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle><h2>Change your Mind?</h2></CardTitle>
                    <CardText>Minor Admonishment</CardText>
                    <Button className = "bg-cancel" onClick={toggle}>
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
          <ModalHeader toggle={toggle}><h2>Modal title</h2></ModalHeader>
          <ModalBody>Confirm Cancellation? Your host will be sad.</ModalBody>
          <ModalFooter>
            <Button className = "bg-confirm" onClick={toggle}>
              DO NOT CANCEL
            </Button>{" "}
            <Button className = "bg-cancel" onClick={toggle}>
              Yes, Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default connect(null, {updateEvent, deleteEvent})(EventPage)
