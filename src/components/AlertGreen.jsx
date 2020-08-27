import React, { useState } from 'react';
import { Alert } from 'reactstrap';

//will run on successful update and accept actions

const AlertGreen = ({message}) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Alert color="success" isOpen={visible} toggle={onDismiss}>
      {message}
    </Alert>
  );
}

export default AlertGreen;