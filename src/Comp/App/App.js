import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom'
import Img from '../Imagelisting/Imagelisting'
import Create from "../Create/Create"
import Home from "../Home/Home"
import Nav from '../Navigation/Nav'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data:[]}
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

  render(){
   return(
    <div classname="skewed">
      <Nav></Nav>
      {/* <Img></Img> */}

      <Route path="/"
          component={Home}
        />
      <Route path="/images"
          component={Img}
        />
        
      <Route path="/create"
          component={Create}
        />

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
