import React, { Component } from 'react';
import axios from 'axios'
import GifCreateButton from './GIfCreateButton'
import './Gif.css'


class GiphySearch extends Component {
    constructor(props){
        super(props)
        this.state = {
        results:[],
        searchtext:""
        }

    }

    SearchGif = (event)=>{
        event.preventDefault()
        this.setState({searchtext: event.target.value})
        console.log(this.state.searchtext)
        console.log(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchtext}&api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248`)
        let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchtext}&api_key=OQ6ucd9nTO4qxwA5gKOQtlrKVtvde248`
        axios.get(url).then(info=>{
            console.log(info)
            this.setState({results: info.data.data})
            // console.log("results:")
            console.log(this.state.results[0].images.downsized_large.url)
        }).catch(err=>console.log(err))
    }

    displayedGif= () =>{
        if (this.state.results.length == 0){
            return(<div><h2>LOADING...</h2></div>)
        } else {
            return(<div>PROCESSED</div>)
        }
    }
    
    render() {
            if (this.state.results.length == 0){
                return (
                    <div>
                        <form>
                            <input type="text" onChange={this.SearchGif}></input>
                            <p>{this.state.searchtext}</p>
                            <h2>LOADING...</h2>
                        </form>
                    </div>
                );
            } else {
                return(<div >
                    <form>
                        <input type="text" onChange={this.SearchGif}></input>
                    </form>
                    <div className="gifGrid">
                    {this.state.results.map((i, index)=>(
                        <div key={index}>
                            <img src={i.images.downsized_large.url}/><GifCreateButton imgageurl={i.images.downsized_large.url} name={i.title} ></GifCreateButton>
                        </div>
                    ))}
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