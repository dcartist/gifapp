import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Create.css'

let joininfo = []

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '80ch',
		// width: '45ch',
	  },
	},
  }));

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
			tags:[],
			results: ""
			
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
	  handleoptional = (event) =>{
		event.preventDefault();
		this.setState({
			optionaltag: event.target.value
		  })
	  }
	  handletags = (event) =>{
		event.preventDefault();
		// let joininfo = []
		
		let info = event.target.value.split(",")
		joininfo.push(event.target.value)
		// joininfo.push(event.target.value)
		// console.log(info)
		// joininfo = info
		this.setState(prevState =>({
			// tags: event.target.value
			tags: info
			// tags: joininfo
		  }))
		  console.log("This is updated state tag")
		console.log(this.state.tags)
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
		this.setState({results: "Form has be submitted"})
		console.log('A name was submitted: '+ this.state.name);
		console.log('A name was submitted: '+ this.state.imgageurl);
		console.log('A name was submitted: '+ this.state.tags);

		axios.post(`https://nameless-wildwood-47841.herokuapp.com/img/new`, { 
			name: this.state.name,
            githeight: 0,
            gitwidth:0,
            optionaltag: this.state.optionaltag,
            activityName: this.state.activityName,
			imgageurl:this.state.imgageurl,
            tags: this.state.tags
		 })
      .then(res => {
        console.log(res);
		console.log(res.data);
		// this.props.history.push('/thank-you');
		// const redirectToReferrer = this.state.redirectToReferrer;
        // if (redirectToReferrer === true) {
        //     <Redirect to="/home" />
        // }

      })
 
		// console.log('A name was submitted: '+ this.state.passwordConfirm);
		// event.preventDefault();
	
		}


    render() {
        return (
        <div className="creationFormBase">
 		
		
        <form onSubmit={this.handleSubmit}>
		<div className="creationForm">
		<h2>Adding Image</h2>	
				<div>
				<p><label>Image Name</label></p>
				<TextField value={this.state.name} onChange={this.handleName} fullWidth label="Name" variant="filled" labelWidth={60}/>
				</div>

				<div>
				<p><label>Image Url</label></p>
				<TextField label="Image Url" fullWidth variant="filled"   type="url" value={this.state.imgageurl} onChange={this.handleimgageurl}/>
				</div>
				<div>
				<p><label>Alternate name/description</label></p>
				<TextField  label="description" fullWidth variant="filled" value={this.state.optionaltag} onChange={this.handleoptional} />
				</div>
				<div>
				<p><label>Image Tags </label><small>(please add commas after each tag)</small></p>
				<TextField  label="Image Tags" fullWidth variant="filled" value={this.state.tags} onChange={this.handletags} multiline rows={4}/>
				</div>
				{/* <div>
				<p><label>Image Name</label></p>
				<TextField  label="Filled" fullWidth variant="filled"/>
				</div> */}
				<input type="submit"></input>
				
				</div>

	   
		
		{/* <label>Git Height</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input>
		<label>Git Width</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input> */}
		
		
		{/* <input type="reset"></input>	 */}
	    </form>
		<p>{this.state.results}</p>
            </div>
        );
    }
}

export default Create;