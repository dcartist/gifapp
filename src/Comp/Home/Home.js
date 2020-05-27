import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="HomeBackground">
                <div>
                <h1>Welcome to Giphy insert</h1>
                <h2>To help add gif comments to github.</h2>
                <hr></hr>
                <ul>
                    <li><b>Images:</b> Shows listing of giphy/gfycat images collection</li>
                    <li><b>Add Image:</b> Add image (prefferably gif) to the collection</li>
                    <li><b>Giphy Trends:</b> Shows the trending images on giphy and add them to the collection</li>
                    <li><b>Giphy Search:</b> Search images on giphy/gfycat and add them to the collection</li>
                </ul>
                <hr></hr>
                </div>
            </div>
        );
    }
}

export default Home;