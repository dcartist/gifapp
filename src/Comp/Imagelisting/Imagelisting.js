import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './imageList.css'

class Imagelisting extends Component {
        // constructor(props){
        //     super(props)
        //     this.state = {
        //         data: [],
        //         name: "",
        //         githeight: 0,
        //         gitwidth:0,
        //         optionaltag: "",
        //         activityName:"",
        //         imgageurl:"",
        //         tags:[]
        //     }
        // }
    // componentDidMount(){

    // componentWillMount(){
    //     axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
    //     .then(res => {
    //     //   const persons = res.data;
    //     //   this.setState({ persons });
    //         console.log(res.data)
    //         this.setState ({data: res.data})
    //     })
    // }
    render() {
        // console.log(this.props.data)
    //     let imagedata = this.props.data.map((i, index) => <div>
    //         <p key={index}>this info is {i.name}</p>
    // <img src={i.imgageurl}/>
    //     </div>)
        return (
            <div className="imageListBase">
                this is working
                {/* {imagedata} */}
                {this.props.data.map((i, index) => <div>
                    <p key={index}>this info is {i.name}</p>
                    <Link to={`/imagedetail/${i._id}`}><button> Info</button></Link>
    <img src={i.imgageurl}/>
    <p></p>
                </div>)}
            </div>
        );
    }
}

export default Imagelisting;