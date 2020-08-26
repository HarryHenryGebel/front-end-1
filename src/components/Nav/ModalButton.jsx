import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"


export default function ModalButton ({buttonLabel, buttonColor, formComponent}) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);


  return (
    <div>
      <Button className={buttonColor} onClick={toggleModal}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{buttonLabel} component</ModalHeader>
          <ModalBody>
            {formComponent}
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Submit</Button>{' '}
          </ModalFooter>
      </Modal>
    </div>
  )
}
