import React, { Component } from 'react';
import axios from 'axios'


class Gifapi extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: []
        }
    }
    componentWillMount(){
        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248').then(info=>{
            console.log(info.data.data)
            this.setState({results: info.data.data})
            console.log("results:")
            console.log(this.state.results[0].images.downsized_large.url)
        }).catch(err=>console.log(err))

       
    }
    render() {
        let gifImgages 
        let finalresults = []
        if (this.state.results.length == 0){
        //   gifImgages = "LOADING"
        console.log("loading this up")
        } else {

            console.log(this.state.results[0].images.downsized_large.url)
            for (let i = 0; i<this.state.results.length; i++){
                console.log(this.state.results[i].images.downsized_large.url)
                finalresults.push(this.state.results[i].images.downsized_large.url)
            }
        //      gifImgages = this.state.results.map((i, index)=><div>
        //     <li><img src={this.state.results[i].images.downsized_large.url}/></li>
        // </div>)
        }
        
        return (
            <div>
                {finalresults.map(i=><div><img src={i}/>
                </div>)}
               {/* {gifImgages} */}

               {/* {this.state.results[0].images.downsized_large.url} */}
                
            </div>
        );
    }
}

export default Gifapi;