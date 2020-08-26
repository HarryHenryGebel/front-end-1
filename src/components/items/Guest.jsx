import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

export default function Guest(props) {
  const { fname, lname, primaryEmail } = props;

  return (
    <Card>
      <CardBody>
        <CardText>
          {fname} {lname}
        </CardText>
        <CardText>{primaryEmail}</CardText>
      </CardBody>
    </Card>
  );
}
