import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Deletion from "./Deletion"
import axios from 'axios'
import {Link} from 'react-router-dom'



const ModalModalExample = (props) => (


  <Modal trigger={<Button>Delete</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.url} />
      <Modal.Description>
          <p>Are you sure you want to delete this?</p> 
          <link to={`/delete/${props.id}`}><button>YES!!</button></link>
        {/* <h2>{this.state.results}</h2> */}

      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample