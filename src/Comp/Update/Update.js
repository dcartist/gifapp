import React, { Component } from "react";
import axios from "axios";

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
		//   console.log("this is the state:")
		//   let testingOb = Object.keys(this.state)
		//   let testingOb = Object.values(this.state)
		//   let testingOb = Object.entries(this.state)
		//   console.log(testingOb)
		//   console.log(this.state)
		//   console.log(testingOb[0][1].length)
        // console.log(res);
        // this.setState({ results: res.data });
        this.setState(res.data);
        console.log("this is results");
        // console.log(this.state.results);
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
    // joininfo.push(event.target.value)
    // joininfo.push(event.target.value)
    // console.log(info)
    // joininfo = info
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
      <div>
        <div>
          <form onSubmit={this.update}>
            <h2>Updating Image</h2>
			<p>Update:</p>
			{/* <input value={this.state.testingText} onChange={this.handleTest}></input> */}
			
            <label>Image Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
              placeholder={this.state.results.name}
            ></input>

            <label>Image Url</label>
            <input type="url" value={this.state.imgageurl} onChange={this.handleimgageurl} placeholder={this.state.results.imgageurl}></input>
            <label> Alternate name/description</label>
            <textarea value={this.state.optionaltag} onChange={this.handleoptional} placeholder={this.state.results.optionaltag}></textarea>
            <label> tags</label>
            <input type="text" value={this.state.tags} onChange={this.handletags} placeholder={this.state.results.tags}></input>

            {/* <label>Git Height</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input>
		<label>Git Width</label>
		<input type="number" value={this.state.name} onChange={this.handleChange} placeholder="Image Name"></input> */}

            <input type="submit"></input>
            {/* <input type="reset"></input>	 */}
          </form>
        </div>
      </div>
    );
  }
}

export default Update;
