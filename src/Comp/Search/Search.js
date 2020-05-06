import React, { Component } from 'react';
//Material
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
let styling = {
    backgroundColor: "white"
}

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchedText: "",
            searchresults: [],
            results:[]
        }
    }
    componentWillMount(){
        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
        .then(res => {
            // console.log(res.data)
            this.setState ({data: res.data})
        })
    }
    

    searchInput = (event) => {
        event.preventDefault()
        this.setState({searchedText: event.target.value})
        console.log(this.state.searchedText)

    }
    render() {
        return (
            <div>
                SEARCH FIELD
                <div>
                <form >
                    {/* <input type="text"></input> */}
      <TextField label="SEARCH" onChange={this.searchInput} />
    </form>
                <h2>{this.state.searchedText}</h2>
                </div>
     
            </div>
        );
    }
}

export default Search;