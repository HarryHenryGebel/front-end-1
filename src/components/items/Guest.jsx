import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

export default function Guest(props) {
  const { firstName, lastName, primaryEmail } = props;

  return (
    <Card>
      <CardBody>
        <CardText>
          {firstName} {lastName}
        </CardText>
        <CardText>{primaryEmail}</CardText>
      </CardBody>
    </Card>
  );
}
