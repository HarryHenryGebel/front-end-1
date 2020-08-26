import React, { useState } from 'react';
import { Alert } from 'reactstrap';


const AlertRed = ({message}) => {

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      {message}
    </Alert>
  );
}


export default AlertRed;