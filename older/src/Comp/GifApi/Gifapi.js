import React, { Component } from 'react';
import axios from 'axios'
import GifCreateButton from './GIfCreateButton'
import './Gif.css'
import Card from '../Cards/Materials/CardGif'


class Gifapi extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifName: this.props.gifName,
            results: [],
            catresults: []
        }
    }
    componentWillMount(){
        
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248').then(info=>{
            this.setState({results: info.data.data})
        }).catch(err=>console.log(err))
        axios.get('https://api.gfycat.com/v1/reactions/populated?tagName=trending').then(info=> {
            console.log(info.data.gfycats)
            this.setState({catresults: info.data.gfycats})
            console.log(info.data.gfycats)
            console.log('state cat results:')
            console.log(this.state.catresults)
        })

       
    }
    render() {
        
        let finalresults = []
        if (this.state.results.length == 0){
        // //   gifImgages = "LOADING"
        // console.log("loading this up")
        } else {

            // console.log(this.state.results[0].images.downsized_large.url)
            for (let i = 0; i<this.state.results.length; i++){
                // console.log(this.state.results[i].images.downsized_large.url)
                finalresults.push({url:this.state.results[i].images.downsized_large.url,
                    name: this.state.results[i].title
                })
                
            }

        }
        
        return (
            <div className="gifGrid">
                {finalresults.map((i, index)=>(
                        <div key={index}>
                            <Card url={i.url} name={i.name}></Card>
                        </div>
                    ))
                    
                    }
                {this.state.catresults.map((i, index)=>(
                        <div key={index}>
                            <Card url={i.gifUrl} name={i.title}></Card>
                        </div>
                    ))
                    
                    }
                {/* {finalresults.map(i=><div><img src={i.url}/><GifCreateButton imgageurl={i.url} name={i.name} ></GifCreateButton></div>)} */}
              
                
            </div>
        );
    }
}

export default Gifapi;