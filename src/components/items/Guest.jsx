import React from "react";
import { Button, Card, CardBody, CardText, CardFooter } from "reactstrap";

function Guest(props) {
  const { fname, lname, primaryemail } = [props];

  return (
    <Card>
      <CardBody>
        <CardText>
          {fname} {lname}
        </CardText>
        <CardText>{primaryemail}</CardText>
        <CardFooter>
          <Button className=".bg-cancel">Remove</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default Guest;
