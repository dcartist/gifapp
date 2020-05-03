import React, { Component } from 'react';
import axios from 'axios'
import GifCreateButton from './GIfCreateButton'
import './Gif.css'


class Gifapi extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifName: this.props.gifName,
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
        
        let finalresults = []
        if (this.state.results.length == 0){
        //   gifImgages = "LOADING"
        console.log("loading this up")
        } else {

            // console.log(this.state.results[0].images.downsized_large.url)
            for (let i = 0; i<this.state.results.length; i++){
                // console.log(this.state.results[i].images.downsized_large.url)
                finalresults.push({url:this.state.results[i].images.downsized_large.url,
                    name: this.state.results[i].title
                })
                
            }

        //      gifImgages = this.state.results.map((i, index)=><div>
        //     <li><img src={this.state.results[i].images.downsized_large.url}/></li>
        // </div>)
        }
        
        return (
            <div className="gifGrid">
            
                {finalresults.map(i=><div><img src={i.url}/><GifCreateButton imgageurl={i.url} name={i.name} ></GifCreateButton></div>)}
              
                
            </div>
        );
    }
}

export default Gifapi;