import React, { Component } from 'react';
import axios from 'axios';
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
            this.state = {
                pages: 10,
                data: [],
                pageListing: 90,
                // pageListing:0,
                pageListArray:[],
                currentPage: 0
            }
        }
        // resetImg = ()=>{
        //     axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
        //     .then(res => {
        //       console.log("resetting data")
        //         // console.log(res.data)
        //         this.setState ({data: res.data, pageListing: this.state.data/10 })
                 
        //     })
        //   }
        trial = (number, array)=>{
            let end = number + 10
            let setofNumbers = array.slice(number, end)
             console.log (setofNumbers)
          }

    componentDidMount(){

        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
        .then(res => {
        let rounded = Math.round(res.data.length/10)
        console.log(rounded)
        this.setState=({pageListing: 20})
        this.setState=({data: res.data})
        
        // this.setState=({pageListing: 20})
        //Checks to see if the APP data  needs to be updated with API updated data
        // let checker = (arr, target) => target.every(v => arr.includes(v));
        // if (checker(this.props.data, res.data)){
        //     console.log("this is true")
        //     this.setState({pageListing: this.data.length/10})
        // } else {
            
        //     this.resetImg()

        // }
      
        })
        
    }
    render() {

    
        return (
            <div className="imageListBase">
                {this.props.data.length}
                <p>
                {this.state.pageListing}
                </p>
                {/* {Math.round(this.props.data.length/10)} */}
                <p>Finding length</p>
                {/* {this.props.data.map((i, index) => <Card url={i.imgageurl} name={i.name} id={i._id}></Card>)} */}
                {/* {this.props.data.map((i, index) => <div key={index}>{i.name}</div>)} */}



            </div>
        );
    }
}

export default Imagelisting;