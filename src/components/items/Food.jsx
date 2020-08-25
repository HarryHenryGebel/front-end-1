import React from "react";
import { Button, Card, CardBody, CardText, CardFooter } from "reactstrap";

export default function Food(props) {
  const { foodname } = props;
  return (
    <Card>
      <CardBody>
        <CardText>{foodname}</CardText>
        <CardFooter>
          <Button className=".bg-cancel">Remove</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
