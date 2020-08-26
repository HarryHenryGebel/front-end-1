import React from "react";
import { Button, Card, CardBody, CardText, CardFooter } from "reactstrap";

export default function Guest(props) {
  const { fname, lname, primaryemail } = props;

  return (
    <Card>
      <CardBody>
        <CardText>
          {fname} {lname}
        </CardText>
        <CardText>{primaryemail}</CardText>

      </CardBody>
    </Card>
  );
}
