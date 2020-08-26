import React from "react";
import { Card, CardBody} from "reactstrap";

export default function Food(props) {
  const { foodname } = props;
  return (
    <Card>
      <CardBody>
        <h3>{foodname}</h3>
      </CardBody>
    </Card>
  );
}
