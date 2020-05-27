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
            this.setState ({results: res.data})
            // console.log(this.state.results)
            
        })

    }
    

    searchInput = (event) => {
        event.preventDefault()
        this.setState({searchedText: event.target.value})
        // this.state.results.filter(item=> item.name.includes(event.target.value))
        // console.log(this.state.results.filter(item=> item.name.includes(event.target.value)))
        // console.log(this.state.results.filter(item=> item.name.includes(event.target.value)))
        let resultNames =  this.state.results.filter(item=> item.name.includes(event.target.value))
        this.setState({searchresults: resultNames})
        console.log("search results")
        console.log(this.state.searchresults)
        

    }

    // letters = (e) =>{
    //     e.preventDefault();
    //     console.log(e.target.innerHTML)
    //     if (e.target.innerHTML === "clear"){
    //         this.setState({programNames: names})
    //     } else {
    //         let newNames =  this.state.results.filter(item=> item.name.includes(event.target.value))
    
    // names.filter(item => e.target.innerHTML.toLowerCase() ===
    //         item.name
    //           .split("")
    //           .slice(0, e.target.innerHTML.length)
    //           .join("")
    //           .toLowerCase()
    // )
    // this.setState({programNames: newNames})
    //     }
       
    // }
    render() {
        let returned = this.state.searchresults.map(item=><div> <img src={item.imgageurl}/> </div>)
        // let returned = this.state.searchresults.map(item=>(<div> <img src={item.imgageurl}/> </div>))

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
            {returned}
            </div>
        );
    }
}

export default Search;