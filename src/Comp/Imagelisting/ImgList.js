// Length from main then divide by how many on a page
// limit is how many on a page
//skip is page number * how many on a page

import React, { Component } from "react";
import axios from "axios";
import "pivotal-ui/css/copy-to-clipboard";
import "pivotal-ui/css/buttons";
import JwPagination from "jw-react-pagination";
// import {Icon} from 'pivotal-ui/react/iconography';
import Card from "../Cards/Materials/Card";
// import Card from "../Cards/Materials/SmCard";

import { Link } from "react-router-dom";
import "./imageList.css";

class ImgList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      pageOfItems: [],
      pageListing: 90,
      pages: [],
      listNumber: 0,
      // pageListing:0,
      pageListArray: [],
      currentPage: 0,
    };
  }

  pageInput = (item) => {
    this.setState({listNumber: item})
    console.log(this.state.listNumber)

  }
  trial = (number, array) => {
    let end = number + 10;
    let setofNumbers = array.slice(number, end);
    console.log(setofNumbers);
  };

  onChangePage = (pageOfItems) => {
    // update local state with new page of items
    this.setState({ pageOfItems });
  };

  listingNumbers = () => {
    console.log((this.props.data.length/12)+1)
    let pagenumbers = []
    console.log('numbers')
    for (let i = 1; i < ((this.props.data.length/12)+1); i++ ){
      // console.log(i)
      pagenumbers.push(i)
    }
    // return(pagenumbers.map((item, index)=> (<li key={index}><a href="#" id={item} onClick={this.pageInput}>{item}</a></li>)))
    return(pagenumbers.map((item, index)=> (<li key={index}><Link id={item} onClick={this.pageInput(item)}>{item}</Link></li>)))
  }


  componentWillMount() {
    axios
      .get(`https://nameless-wildwood-47841.herokuapp.com/img`)
      .then((res) => {
        // let rounded = Math.round(res.data.length/10)
        // console.log(rounded)
        // this.setState ({data: res.data})
        this.setState({ pages: res.data });
        console.log(this.state.pages);

        // this.setState=({pageListing: 20})
        //Checks to see if the APP data  needs to be updated with API updated data
        // let checker = (arr, target) => target.every(v => arr.includes(v));
        // if (checker(this.props.data, res.data)){
        //     console.log("this is true")
        //     this.setState({pageListing: this.data.length/10})
        // } else {

        //     this.resetImg()

        // }
      })
      .then((res) => {
        console.log(res);
        console.log("info");
      })
      .catch((err) => console.log(err));
  }


  render() {
    
    return (
      <div>
        {this.props.data.length/12}
       <ul className="pn"> {this.listingNumbers()}</ul>
        this is a test
        <div className="Pagination">
          <JwPagination
            items={this.state.pages}
            onChangePage={this.onChangePage}
            pageSize={12}
          />
        </div>
        <div className="imageListBase">
          {this.state.pageOfItems.map((item) => (
            // <div key={item.id}>{item.name}</div>
            <Card url={item.imgageurl} name={item.name} id={item._id}></Card>
          ))}

          {/* {this.props.data.length}
                <p>
                {this.state.pageListing}
                </p> */}
          {/* {Math.round(this.props.data.length/10)} */}
          {/* <p>Finding length</p> */}
          {/* {this.props.data.map((i, index) => <Card url={i.imgageurl} name={i.name} id={i._id}></Card>)} */}
          {/* {this.props.data.map((i, index) => <div key={index}>{i.name}</div>)} */}
        </div>
        {/* <div className="Pagination Pagspace">
          <JwPagination
            items={this.state.pages}
            onChangePage={this.onChangePage}
            pageSize={12}
          />
        </div> */}
      </div>
    );
  }
}

export default ImgList;
