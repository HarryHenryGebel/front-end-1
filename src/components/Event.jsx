//will contain all data for the upcoming event
//if user === host, card will contain complete GuestList (RSVP true/false)
//if user === host, card will contain access to foods being brought and who is bringing food
//if user === host, card will feature a button to call/text guests if they have not RSVP'd

//if user === guest, card will contain googleMap location, date and time
//if user === guest, card will contain their food obligation && stretch - recipe(Josh)

//may need to break component down further

//ADD ALERT TO CONFIRM EVENT CANCELLATION
import React, { useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
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
import EditEvent from "./EditEvent";
import {deleteEvent} from '../actions'
import {connect} from 'react-redux'

function Event() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

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

  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle><h2>Event Name</h2></CardTitle>
          <CardSubtitle>Event Host</CardSubtitle>
          <CardText>
            Date and Time <br />
            Location <br />
          </CardText>
          {/*Button will Launch Modal */}
          <Button className = "bg-addon" onClick={toggle}>Launch Modal</Button>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Event Name</ModalHeader>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={{ active: activeTab === "1" }}
              onClick={() => {
                toggleTab("1");
              }}
            >
              <h5>Event</h5>
            </NavLink>
          </NavItem>
          {/*Event Organizer Only */}
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
          {/* Event Guest Only */}
          <NavItem>
            <NavLink
              className={{ active: activeTab === "3" }}
              onClick={() => {
                toggleTab("3");
              }}
            >
              <h5>Food</h5>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={{ active: activeTab === "4" }}
              onClick={() => {
                toggleTab("4");
              }}
            >
              <h5>Food</h5>
            </NavLink>
          </NavItem>
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
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <Button className = "bg-cancel" onClick={toggleNested}>
                    Cancel Event
                  </Button>
                  <Modal
                    isOpen={nestedModal}
                    toggle={toggleNested}
                    onClosed={closeAll ? toggle : undefined}
                  >
                    <ModalHeader><h2>Cancel Event Name?</h2></ModalHeader>
                    <ModalBody>
                      Are you sure you wish to cancel this event?
                    </ModalBody>
                    <ModalFooter>
                      <Button className = "bg-confirm" onClick={toggleNested}>
                        Nevermind
                      </Button>{" "}
                      <Button className = "bg-cancel" onClick={toggleAll}>
                        Yes, I'm Sure
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>

                <ModalFooter>
                  <Button className = "bg-cancel" onClick={toggle}>
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
                  <CardTitle><h6>Guest Name</h6></CardTitle>
                  <CardText>RSVP : True/False; Bringing: Food Item/s</CardText>
                  {/*Button makes phone call */}
                  <Button>Call</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                {/*map foodItem to card, for event guest only? */}
                <Card>
                  <CardTitle><h6>Food Item Name</h6></CardTitle>
                  <CardText>RSVP : True/False; Bringing: Food Item/s</CardText>
                  {/*Button makes phone call */}
                  <Button className = "bg-addon">Search Recipe?(stretch)</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                {/*map foodItem to card, for event organizer only? */}
                <Card>
                  <CardTitle><h6>Menu</h6></CardTitle>
                  <CardText>Filter Have / Need</CardText>
                  {/*Button makes phone call */}
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            {/*Host Only */}

            <EditEvent />
          </TabPane>
        </TabContent>
      </Modal>
    </>
  );
}

export default connect(null, {deleteEvent})(Event)
