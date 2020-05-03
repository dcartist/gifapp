import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom'
import Img from '../Imagelisting/Imagelisting'
import Create from "../Create/Create"
import Home from "../Home/Home"
import Nav from '../Navigation/Nav'
import Deleted from '../Delete/Delete'
import Update from '../Update/Update'
import Image from '../Image/Image'
import Main from '../ GifApi/Gifapi'
import CreateGif from '../Create/GifCreate'
import Giphy from '../ GifApi/Gifapi'
import Searched from '../ GifApi/GiphySearch'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    data:[],
    gifName: "Gif NAme",
    gifUrl:"",
    id: ""
  }   
  }

  
  componentWillMount(){
    axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
    .then(res => {
        console.log(res.data)
        this.setState ({data: res.data})
    })
}

setGifName = (event) =>{
  event.preventDefault();
  this.setState({
    gifName: event.target.value
    })
  console.log(this.state.gifName)
  }


  render(){
   return(
    <div classname="skewed">
      <Nav></Nav>
      {/* <Main></Main>   */}
      <Route path="/" component={Home} />
      <Route path="/giphy/trends" render={(props)=><Giphy gifName={this.state.gifName} setGifName={this.setGifName}></Giphy>}/>
      {/* <Route path="/giphy/trends" render={(props)=><Giphy gifName={this.state.gifName}></Giphy>}/> */}
      <Route path="/images" render={(props)=> <Img data={this.state.data}></Img>} /> 
      {/* <Route path="/images" component={Img} />  */}
      <Route path="/create" component={Create}/>
      <Route path="/search" component={Searched}/>

      <Route path="/delete/:deletedId" component={Deleted}/>
      <Route path="/update/:update" component={Update}/>
      <Route path="/imagedetail/:imagedetail" component={Image}/>

      {/* <Route path="/delete/:deletedId" render={(props)=> <Deleted deletedid={this.id} />}/> */}
      {/* <Route path="/jobs/info/:jobId" render={(props)=> <Jobinfo setjobId={this.setjobId} {...props} {...this.state} />} /> */}
    
    
    </div>
   )
  }
}

// function App() {
//   return (
//     <div className="App">
//       Images lising
//       <Img></Img>
//     </div>
//   );
// }

export default App;
