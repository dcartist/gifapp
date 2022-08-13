import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Img from "../Imagelisting/Imagelisting";
import Imglist from "../Imagelisting/ImgList";
import Create from "../Create/Create";
import Home from "../Home/Home";
import Nav from "../Navigation/Nav";
import Deleted from "../Delete/Delete";
import Update from "../Update/Update";
import Image from "../Image/Image";
import Giphy from "../GifApi/Gifapi";
import Listing from "../Imagelisting/Listing"
import GifSearched from "../GifApi/GiphySearch";
import Search from "../Search/Search";
import ImagePage from '../Imagelisting/Pagination'
let backGroundColoring = {
  // backgroundColor: '#a11515',
  paddingBottom: '20px',
  backgroundImage: 'radial-gradient( #570202, #7d0000, #a11515)'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      gifName: "Gif NAme",
      gifUrl: "",
      id: "",
    };
  }

  componentWillMount() {
    axios
      .get(`https://nameless-wildwood-47841.herokuapp.com/img`)
      .then((res) => {
        // console.log(res.data)
        this.setState({ data: res.data });
      });
  }

  resetImg = () => {
    axios
      .get(`https://nameless-wildwood-47841.herokuapp.com/img`)
      .then((res) => {
        // console.log("resetting data");
        // console.log(res.data)
        this.setState({ data: res.data });
      });
  };

  setGifName = (event) => {
    event.preventDefault();
    this.setState({
      gifName: event.target.value,
    });
    // console.log(this.state.gifName);
  };

  render() {
    return (
      <div classname="skewed" style={backGroundColoring}>
        <Nav></Nav>
        <Route path="/" exact component={Home} />
        <Route
          path="/giphy/trends"
          render={(props) => (
            <Giphy
              gifName={this.state.gifName}
              setGifName={this.setGifName}
            ></Giphy>
          )}
        />
        {/* <Route path="/giphy/trends" render={(props)=><Giphy gifName={this.state.gifName}></Giphy>}/> */}
        {/* <Route path="/images" render={(props)=> <Img data={this.state.data}> resetImg={this.resetImg()}</Img>} />  */}
        {/* <Route
          path="/images"
          render={(props) => <Imglist data={this.state.data}></Imglist>}
        /> */}
        <Route
          path="/page"
          render={(props) => <Imglist data={this.state.data}></Imglist>}
        />
        {/* <Route path="/pagination" render={(props)=> <Imglist data={this.state.data}> resetImg={this.resetImg()}</Imglist>} />  */}
        {/* <Route path="/images" component={Img} />  */}
        <Route path="/create" component={Create} />
        <Route path="/search" component={Search} />
        {/* <Route path="/pagination/:pagenumber" component={Listing} /> */}
        <Route path="/pagination/:pagenumber" render={(props) => <ImagePage data={this.state.data} {...props}></ImagePage>}/>
        <Route path="/list" render={(props) => <Listing data={this.state.data}></Listing>}/>
        <Route path="/images" render={(props) => <Listing data={this.state.data}></Listing>}/>
        <Route path="/giphy/search" component={GifSearched} />

        <Route path="/delete/:deletedId" component={Deleted} />
        <Route path="/update/:update" component={Update} />
        <Route path="/imagedetail/:imagedetail" component={Image} />

        {/* <Route path="/delete/:deletedId" render={(props)=> <Deleted deletedid={this.id} />}/> */}
        {/* <Route path="/jobs/info/:jobId" render={(props)=> <Jobinfo setjobId={this.setjobId} {...props} {...this.state} />} /> */}
      </div>
    );
  }
}

export default App;
