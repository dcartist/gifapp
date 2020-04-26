import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: "",
            githeight: 0,
            gitwidth:0,
            optionaltag: "",
            activityName:"",
			imgageurl:"",
			default: true,
            tags:[]
			
		}
	}
	
	handleName = (event) =>{
		event.preventDefault();
		this.setState({
			name: event.target.value
		  })
	  }
	  handleActivityName = (event) =>{
		event.preventDefault();
		this.setState({
			activityName: event.target.value
		  })
	  }
	  handleimgageurl = (event) =>{
		event.preventDefault();
		this.setState({
			imgageurl: event.target.value
		  })
	  }
	
	  handleSubmit = (event) =>{
		event.preventDefault();
		// if (this.state.password === this.state.passwordConfirm) {
		//   this.setState({
		// 	validText: 'Valid',
		// 	  valid: true
		//   })
		// } else {
		//   this.setState({
		// 	validText: 'Passwords do not match',
		// 	  valid: false
		//   })
	
		console.log('A name was submitted: '+ this.state.name);
		console.log('A name was submitted: '+ this.state.imgageurl);
		// console.log('A name was submitted: '+ this.state.passwordConfirm);
		// event.preventDefault();
	
		}


    componentWillMount(){
        
    }
    render() {
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
	    <h2>Adding Image</h2>
		<label>Image Name</label>
		<input type="text" value={this.state.name} onChange={this.handleName} placeholder="Image Name"></input>
		<label>Image Url</label>
		<input type="url" value={this.state.imgageurl} onChange={this.handleimgageurl} placeholder="Image Url"></input>
		{/* <label> Alternate name/description</label>
		<textarea></textarea>
		<label> tags</label>
		<input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input>
		<label>Git Height</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input>
		<label>Git Width</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input> */}
		
		<input type="submit"></input>
		<input type="reset"></input>	
	    </form>
            </div>
        );
    }
}

export default Create;