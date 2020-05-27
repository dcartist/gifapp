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
import GifCreateButton from '../../GifApi/GIfCreateButton'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"white",
    marginTop: 20,
    boxShadow: "5px 5px 10px black"
  },
  
});

export default function ImgMediaCard(props) {
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
           {props.name} <DefaultButton  aria-label="Edit" style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: false,
     icon: <Icon name="copy" size='small'  aria-label="Edit" aria-hidden="true"/>
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
      {/* <Link to={`/imagedetail/${props.id}`}><Icon name="info circle"/></Link>
      <Link to={`/delete/${props.id}`}><Icon name="trash alternate"></Icon></Link> */}
      {/* <Link to={`/update/${props.id}`}><Icon name="edit"></Icon></Link> */}
      <GifCreateButton imgageurl={props.url} name={props.name} ></GifCreateButton> 
      <CopyToClipboard text={`<img src="${props.url}" width=500/>`} tooltip="Copied">
                    <DefaultButton aria-label="Edit" style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy" size='small' aria-label="true" aria-hidden="true"/>
    }}/>
  </CopyToClipboard>
      </CardActions>
    </Card>
  );
}