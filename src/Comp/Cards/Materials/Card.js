import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {Icon, Image } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import 'pivotal-ui/css/copy-to-clipboard';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/buttons';
import './CardsMat.css'
import axios from 'axios'
import Modal from '../../Delete/Modal'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"white",
    marginTop: 20,
    boxShadow: "5px 5px 10px black"
  },
  
});



export default function ImgMediaCard(props) {
  let deletion = (event) => {
    event.preventDefault();
    axios.delete(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${props.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${props.id}`)
    console.log("deleted")
    // this.setState({results:"This information has been deleted"})
  }
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className="cardLinks">
          
        <CardMedia
          component="img"
          alt={props.name}
          height="230"
          image={props.url}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <CopyToClipboard text={`<img src="${props.url}" width=500/>`} tooltip="Copied">
           {props.name} <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy" size='small'/>
    }}/>
  </CopyToClipboard>
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/imagedetail/${props.id}`}><Icon name="info circle"/></Link>
      <Link to={`/delete/${props.id}`}><Icon name="trash alternate"></Icon></Link>
      {/* <Modal id={props.id} url={props.url}></Modal> */}
      <Link to={`/update/${props.id}`}><Icon name="edit"></Icon></Link>
       
      <CopyToClipboard text={`<img src="${props.url}" width=500/>`} tooltip="Copied">
                    <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy" size='small'/>
    }}/>
  </CopyToClipboard>
      </CardActions>
    </Card>
  );
}