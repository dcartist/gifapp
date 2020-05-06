import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Cards.css'

import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import 'pivotal-ui/css/copy-to-clipboard';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/buttons';
// import {Icon} from 'pivotal-ui/react/iconography';


const CardExampleImageCard = (props) => (
  <Card color='red' raised={true} >
      
    <Image src={props.url} wrapped  ui={false} size='medium'/>
    <Card.Content textAlign={'center'}>
    <Card.Header>{props.name}  <CopyToClipboard text={`<img src="${props.url}" width=500/>`} tooltip="Copied">
                    <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy" size='small'/>
    }}/>
  </CopyToClipboard></Card.Header>

    
                    

      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
      
 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Link to={`/imagedetail/${props.id}`}><Icon name="info circle"/></Link>
      <Link to={`/delete/${props.id}`}><Icon name="trash alternate"></Icon></Link>
      <Link to={`/update/${props.id}`}><Icon name="edit"></Icon></Link>
      <CopyToClipboard text={`<img src="${props.url}"/>`} tooltip="Copied">
                    <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy"/>
    }}/>
  </CopyToClipboard>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard