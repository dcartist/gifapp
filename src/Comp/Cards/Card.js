import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Cards.css'

const CardExampleImageCard = (props) => (
  <Card color='red' className="CardBackground">
      
    <Image src={props.url} wrapped ui={false} />
    <Card.Content>
    <Card.Header>{props.name}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard