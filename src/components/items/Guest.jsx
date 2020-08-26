import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

export default function Guest(props) {
  const { firstName, lname, primaryEmail } = props;

  return (
    <Card>
      <CardBody>
        <CardText>
          {firstName} {lname}
        </CardText>
        <CardText>{primaryEmail}</CardText>
      </CardBody>
    </Card>
  );
}
