import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

class Delete extends Component {
    constructor(props){
        super(props)
        this.state={
            // id: this.props.match.params.deletedID
            id: this.props.match.params.deletedId,
            results: ""
        }
    }
    deletion = (event) => {
        event.preventDefault();
        axios.delete(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        console.log(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${this.state.id}`)
        console.log("deleted")
        this.setState({results:"This information has been deleted"})
    }
    render() {
        console.log(this.state.id)
        return (
            <div>
                <p>This is deletion for {this.state.id}</p> 
                <form onSubmit={this.deletion}>
                    <input type="Submit"></input>

                </form>
                <h2>{this.state.results}</h2>
            </div>
        );
    }
}

export default Delete;