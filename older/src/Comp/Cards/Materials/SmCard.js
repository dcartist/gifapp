import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {Icon, Image } from 'semantic-ui-react'
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import 'pivotal-ui/css/copy-to-clipboard';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/buttons';
import './CardsMat.css'
import axios from 'axios'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    // height: "auto",
    // maxWidth: '90%'
    margin: 20,
    maxHeight: 200,
    // width: '70%'
    // width: '100%'
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    // flex: "5 0 auto"
  },
  cover: {
    // width: 250
    maxWidth: "100%",
    height: '90%',

    // paddingTop: '100%'
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function MediaControlCard(props) {
    let deletion = (event) => {
        event.preventDefault();
        axios.delete(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${props.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        console.log(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${props.id}`)
        console.log("deleted")
      }
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details} className="cardLinks">
        <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
           <CopyToClipboard text={`<img src="${props.url}" width=500/>`} tooltip="Copied">
           {props.name} <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon name="copy" size='small'/>
    }}/>
  </CopyToClipboard>
          </Typography>

        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        component="img"
          alt={props.name}
          // height="230"
          // height="230"
          image={props.url}
          title={props.name}
      />
    </Card>
  );
}
