import React, { Component } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Update.css'

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '80ch',
		// width: '45ch',
	  },
	},
  }));

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.match.params.deletedID
      id: this.props.match.params.update,
      name: "",
      githeight: 0,
      gitwidth: 0,
      optionaltag: "",
      activityName: "",
      imgageurl: "",
      tags: [],
	  results: [],
	  testingText: ""
	 



    };
  }
  componentDidMount() {
	  //Loading the information
    axios
      .put(
        `https://nameless-wildwood-47841.herokuapp.com/img/update/${this.state.id}`
      )
      .then(res => {
        this.setState(res.data);
        console.log("this is results");
        console.log(this.state);
      });
  }

  handleName = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };
  handleTest = event => {
    event.preventDefault();
    this.setState({
		testingText: event.target.value
	});
	console.log(this.state.testingText)
  };
  handleActivityName = event => {
    event.preventDefault();
    this.setState({
      activityName: event.target.value
    });
  };
  handleimgageurl = event => {
    event.preventDefault();
    this.setState({
      imgageurl: event.target.value
    });
  };
  handleoptional = event => {
    event.preventDefault();
    this.setState({
      optionaltag: event.target.value
    });
  };
  handletags = event => {
    event.preventDefault();
    // let joininfo = []

    let info = event.target.value.split(",");
    this.setState(prevState => ({
      // tags: event.target.value
      tags: info
      // tags: joininfo
    }));
    console.log("This is updated state tag");
    console.log(this.state.tags);
  };
//Updating the information
  update = event => {
	event.preventDefault();
    axios
      .put(
        `https://nameless-wildwood-47841.herokuapp.com/img/update/${this.state.id}`, {
			tags:this.state.tags,
			name:this.state.name,
			activityName:this.state.activityName,
			imgageurl:this.state.imgageurl,
			optionaltag:this.state.optionaltag
		}
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
   
    this.setState({ results: "This information has been updated" });
  };




  
  render() {
    return (
      <div className="updateBackground">
        <section className="updateBase">
          <div>
            {/* Left side of the update form */}
            <img src={this.state.imgageurl}/>
          </div>
          <div>
          <form onSubmit={this.update}>
		<div className="updateForm">
		<h2>Adding Image</h2>	
				<div>
				<p><label>Image Name</label></p>
				<TextField value={this.state.name} onChange={this.handleName} fullWidth label={this.state.results.imgageurl} variant="filled" labelWidth={60}/>
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
          </div>
        </section>







        
      </div>
    );
  }
}

export default Update;
