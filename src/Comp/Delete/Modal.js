import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Deletion from "./Deletion"

const ModalModalExample = (props) => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.url} />
      <Modal.Description>
          {props.id}
        <Deletion id={props.id}></Deletion>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample