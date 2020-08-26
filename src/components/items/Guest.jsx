import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

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
