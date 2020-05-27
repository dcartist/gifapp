import React, { Component } from 'react';
import axios from 'axios'
import GifCreateButton from './GIfCreateButton'
import './Gif.css'
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import 'pivotal-ui/css/copy-to-clipboard';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/buttons';
// import {Icon} from 'pivotal-ui/react/iconography';
import Card from '../Cards/Materials/CardGif'
let backGroundColoring = {
    // backgroundColor: '#a11515',
    paddingBottom: '20px',
    backgroundImage: 'radial-gradient( #570202, #7d0000, #a11515)'
  }

class GiphySearch extends Component {
    constructor(props){
        super(props)
        this.state = {
        results:[],
        catresults:[],
        searchtext:""
        }

    }

    SearchGif = (event)=>{
        event.preventDefault()
        this.setState({searchtext: event.target.value})
        // console.log(this.state.searchtext)
        // console.log(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchtext}&api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248`)
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchtext}&api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248`
        let gifcatUrl = `https://api.gfycat.com/v1/gfycats/search?search_text=${this.state.searchtext}`
        
        axios.get(url).then(info=>{
            // console.log(info)
            this.setState({results: info.data.data})
            // console.log("results:")
            // console.log(this.state.results[0].images.downsized_large.url)
        }).catch(err=>console.log(err))

        axios.get(gifcatUrl).then(info=> {
            console.log(info.data.gfycats)
            this.setState({catresults: info.data.gfycats})
            console.log(info.data.gfycats)
        })
    }

    displayedGif= () =>{
        if (this.state.results.length == 0 && this.state.catresults.length == 0){
            return(<div><h2>LOADING...</h2></div>)
        } else {
            return(<div>PROCESSED</div>)
        }
    }
    
    render() {
            if (this.state.results.length == 0  && this.state.catresults.length == 0){
                return (
                    <div className="gifBody">
                        <form>
                            <input type="text" onChange={this.SearchGif}></input>
                            <p>{this.state.searchtext}</p>
                            <h2> proceed to type </h2>
                        </form>
                    </div>
                );
            } else {
                return(<div className="gifBody">
                    <form>
                        <input type="text" onChange={this.SearchGif}></input>
                    </form>


                    
                    <div className="gifGrid">

                    

                    {this.state.results.map((i, index)=>(
                        <div key={index}>
                            <Card url={i.images.downsized_large.url} name={i.title}></Card>
                        </div>
                    ))
                    
                    }
                    {this.state.catresults.map((i, index)=>(
                        <div key={index}>
                            <Card url={i.gifUrl} name={i.title}></Card>
                        </div>
                    ))
                    
                    }
                    </div>
                    
                </div>)
            }

        // return (
        //     <div>
        //         <form>
        //             <input type="text" onChange={this.SearchGif}></input>
        //             <p>{this.state.searchtext}</p>
        //         </form>
        //     </div>
        // );
    }
}

export default GiphySearch;