import React, { Component } from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import 'pivotal-ui/css/copy-to-clipboard';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/buttons';
// import {Icon} from 'pivotal-ui/react/iconography';
import Card from '../Cards/Materials/Card'


import {Link} from 'react-router-dom'
import './imageList.css'

class Imagelisting extends Component {
        constructor(props){
            super(props)
            // this.state = {
            //     data: [],
                
            // }
        }
        resetImg = ()=>{
            axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
            .then(res => {
              console.log("resetting data")
                // console.log(res.data)
                this.setState ({data: res.data})
            })
          }
    componentDidMount(){
      
    // componentidMount(){
        // window.location.reload(false); //reloads page

        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
        .then(res => {
      
        //Checks to see if the APP data  needs to be updated with API updated data
        let checker = (arr, target) => target.every(v => arr.includes(v));
        if (checker(this.props.data, res.data)){
            console.log("this is true")
        } else {
            this.resetImg()

        }
      
        })
    }
    render() {
        // console.log(this.props.data)
    //     let imagedata = this.props.data.map((i, index) => <div>
    //         <p key={index}>this info is {i.name}</p>
    // <img src={i.imgageurl}/>
    //     </div>)
        return (
            <div className="imageListBase">
                

                {this.props.data.map((i, index) => <Card url={i.imgageurl} name={i.name} id={i._id}></Card>)}



{/* 
                {this.props.data.map((i, index) => <div className="imageBackground">
                    <p key={index}>{i.name}</p>
                    
                    <p>
                    
                    <Link to={`/imagedetail/${i._id}`}><button> Info</button></Link>
                    <CopyToClipboard text={`<img src="${i.imgageurl}"/>`} tooltip="Copied">
                    <DefaultButton style={{fontSize: '19px'}} {...{
     flat: true,
     iconOnly: true,
     icon: <Icon src="copy"/>
    }}/>
  </CopyToClipboard>
                    </p>
    <img src={i.imgageurl}/>           
    <p></p>
                </div>)} */}
            </div>
        );
    }
}

export default Imagelisting;