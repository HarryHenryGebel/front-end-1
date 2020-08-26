import React from "react";
import { Card, CardBody} from "reactstrap";

export default function Food(props) {
  const { foodName } = props;
  return (
    <Card>
      <CardBody>
        <h3>{foodName}</h3>
      </CardBody>
    </Card>
  );
}
