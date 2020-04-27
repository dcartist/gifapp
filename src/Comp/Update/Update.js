import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props){
        super(props)
        this.state={
            // id: this.props.match.params.deletedID
            id: this.props.match.params.update,
            name: "",
            githeight: 0,
            gitwidth:0,
            optionaltag: "",
            activityName:"",
			imgageurl:"",
			default: true,
			tags:[],
            results: []

        }
    }
    componentDidMount(){
        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img/update/${this.state.id}`).then(
            res=>{
                console.log(res)
                this.setState({results: res.data})
                console.log("this is results")
                console.log(this.state.results)
            }
        )
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
		// joininfo.push(event.target.value)
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
      
    update = (event) => {
        event.preventDefault();
        axios.post(`https://nameless-wildwood-47841.herokuapp.com/img/update/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        console.log(`https://nameless-wildwood-47841.herokuapp.com/img/delete/${this.state.id}`)
        console.log("deleted")
        this.setState({results:"This information has been deleted"})
    }

    render() {
        return (
            <div>
                <div>
                
                
                <form onSubmit={this.update}>
	    <h2>Adding Image</h2>
		<label>Image Name</label>
		<input type={this.state.results.name} value={this.state.results.name} onChange={this.handleName} placeholder="Image Name"></input>
		<label>Image Url</label>
		{/* <input type="url" value={this.state.imgageurl} onChange={this.handleimgageurl} placeholder="Image Url"></input> */}
		<label> Alternate name/description</label>
		{/* <textarea value={this.state.optionaltag} onChange={this.handleoptional} placeholder="Optional"></textarea> */}
		<label> tags</label>
		{/* <input type="text" value={this.state.tags} onChange={this.handletags} placeholder="Image tag"></input> */}
		
        
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