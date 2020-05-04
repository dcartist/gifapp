import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import {Icon, Image } from 'semantic-ui-react'
class Nav extends Component {
    render() {
        return (
            <div className="navBackground">
                <Icon name="image" color="white" size="big"></Icon>
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/Images"}>Images</Link></li>
                <li><Link to={"/Create"}>Add Image</Link></li>
                <li><Link to={"/Giphy/trends"}>Giphy Trends</Link></li>
                <li><Link to={"/Giphy/search"}>Giphy Search</Link></li>



            
            </ul>
            </div>
        );
    }
}

export default Nav;