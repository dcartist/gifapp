import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Deletion from "./Deletion"
import axios from 'axios'




const ModalModalExample = (props) => (


  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.url} />
      <Modal.Description>
          <p>Are you sure you want to delete this?</p> 
        <form onSubmit={props.deletion}>
            <input type="Submit"></input>
        </form>
        {/* <h2>{this.state.results}</h2> */}

      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample