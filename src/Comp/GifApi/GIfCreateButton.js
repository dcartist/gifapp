import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Image } from 'semantic-ui-react'

class GIfCreateButton extends Component {



    handleSubmit = (event) =>{
		event.preventDefault();
		this.setState({results: "Form has be submitted"})
		console.log('A name was submitted: '+ this.props.imgageurl);
		

		axios.post(`https://nameless-wildwood-47841.herokuapp.com/img/new`, { 
			name: this.props.name,
            imgageurl:this.props.imgageurl,
            // tags: this.state.tags
		 })
      .then(res => {
        console.log(res);
		console.log(res.data);
	

      })
        }
        
    render() {
        return (
            <div>
                
        <form onSubmit={this.handleSubmit}>
        <Icon name="copy" size='small'/>
	    {/* <h2>Adding Image</h2>
		<label>Image Name</label>
		<input type="hidden" value={this.state.name} onChange={this.handleName} placeholder="Image Name"></input>
		<label>Image Url</label>
		<input type="url" value={this.state.imgageurl} onChange={this.handleimgageurl} placeholder="Image Url"></input>
		<label> Alternate name/description</label>
		<textarea value={this.state.optionaltag} onChange={this.handleoptional} placeholder="Optional"></textarea>
		<label> tags</label>
		<input type="text" value={this.state.tags} onChange={this.handletags} placeholder="Image tag"></input>

		 */}
		<input type="submit"></input>
	    </form>


            </div>
        );
    }
}

export default GIfCreateButton;