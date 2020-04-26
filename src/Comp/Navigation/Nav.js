import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div className="navBackground">
            Images  
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/Images"}>Images</Link></li>
                <li><Link to={"/Create"}>Add Image</Link></li>



            
            </ul>
            </div>
        );
    }
}

export default Nav;