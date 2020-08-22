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
import EditEvent from './EditEvent'
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
                Location Information
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "2" }}
                onClick={() => {
                  toggleTab("2");
                }}
              >
                Guest List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "3" }}
                onClick={() => {
                  toggleTab("3");
                }}
              >
                Bring Food
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "4" }}
                onClick={() => {
                  toggleTab("4");
                }}
              >
                Change Your Mind? ONLY FOR GUEST
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={{ active: activeTab === "5" }}
                onClick={() => {
                  toggleTab("5");
                }}
              >
                Update Event ONLY FOR HOST
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>
                    Location, Date, Time and What Food Item will be brought
                  </h4>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h4>
                    List of Guests and Photo (Bio?) - Easy Guest Identification
                    - Make new friends!
                  </h4>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Unclaimed Menu Item</CardTitle>
                    <CardText>Map over each item in list to display</CardText>
                    <Button>Claim Food Item!</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="4">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Change your Mind?</CardTitle>
                    <CardText>Minor Admonishment</CardText>
                    <Button color="danger" onClick={toggle}>
                      Cancel Event
                    </Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col sm="12">
                  <EditEvent />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>Confirm Cancellation? Your host will be sad.</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              DO NOT CANCEL
            </Button>{" "}
            <Button color="danger" onClick={toggle}>
              Yes, Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default EventPage;
