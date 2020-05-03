import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from '../Cards/Card'

class Image extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.imagedetail,
            results: []
        }
    }

    componentDidMount(){
        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img/update/${this.state.id}`).then(
            res=>{
                // console.log(res.data)
                this.setState({results: res.data})
                console.log("this is results")
                console.log(this.state.results)
            }
        )
    }


    render() {
        return (
            <div>

                <Card url={this.state.results.imgageurl} name={this.state.results.name}></Card>
                <p>{this.state.results.name}</p>
                <img src={this.state.results.imgageurl}></img>
                update information
                <Link to={`/update/${this.state.id}`}><button>Press to update</button></Link>
            </div>
        );
    }
}

export default Image;