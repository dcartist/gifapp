import React, { Component } from 'react';

class Create extends Component {
    componentWillMount(){
        
    }
    render() {
        return (
        <div>
        <form>
	    <h2>Adding Image</h2>
		<label>Image Name</label>
		<input type="text" value=""></input>
		<label>Image Url</label>
		<input type="url" value=""></input>
		<label> Alternate name/description</label>
		<textarea></textarea>
		<label> tags</label>
		<input type="text"></input>
		<label>Git Height</label>
		<input type="number" value=""></input>
		<label>Git Width</label>
		<input type="number" value=""></input>
		
		<input type="submit"></input>
		<input type="reset"></input>	
	    </form>
            </div>
        );
    }
}

export default Create;