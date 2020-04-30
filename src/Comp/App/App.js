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
class App extends Component {
  constructor(props){
    super(props)
    this.state = {data:[],
    id: ""}
  }

  
  componentWillMount(){
    axios.get(`https://nameless-wildwood-47841.herokuapp.com/img`)
    .then(res => {
    //   const persons = res.data;
    //   this.setState({ persons });
        console.log(res.data)
        this.setState ({data: res.data})
    })
}
// setId = () => {
// this.setState({id: deletedId})
// }

  render(){
   return(
    <div classname="skewed">
      <Nav></Nav>
      
      <Route path="/" component={Home} />
      <Route path="/images" render={(props)=> <Img data={this.state.data}></Img>} /> 
      {/* <Route path="/images" component={Img} />  */}
      <Route path="/create" component={Create}/>
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
