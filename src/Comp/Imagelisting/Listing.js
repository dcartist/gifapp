// Length from main then divide by how many on a page
// limit is how many on a page
//skip is page number * how many on a page
import React, { Component } from "react";
import axios from "axios";
import "pivotal-ui/css/copy-to-clipboard";
import "pivotal-ui/css/buttons";
// import { Icon, Pagination } from 'semantic-ui-react'
import {Pagination} from 'pivotal-ui/react/pagination';

// import {Icon} from 'pivotal-ui/react/iconography';
import Card from "../Cards/Materials/Card";
import 'pivotal-ui/css/pagination';
// import Card from "../Cards/Materials/SmCard";

import { Link } from "react-router-dom";
import "./imageList.css";
let colorPagination = {
    color:'white',
    backgroundColor: 'white'
}

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:[],
      pageOfItems: [],
      pageListing: 90,
      pages: 0,
      listNumber: 0,
      // pageListing:0,
      pageListArray: [],
      currentPage: 0,
      activePage: 1
    };
  }

  pageInput = (evt) => {
   evt.preventDefault();
    console.log(evt)
    console.log(evt.target.id)
  }

  handleSelect = (event, selectedEvent) =>{
    this.setState({results:[]})
    const newActivePage = selectedEvent.newActivePage;
    this.setState({activePage: newActivePage});
    axios.get(`https://nameless-wildwood-47841.herokuapp.com/img/page/${newActivePage}/12`).then((res) => {
        console.log(res)
        this.setState({results:res.data})
      })
      .catch((err) => console.log(err));
  }
  

  componentWillMount() {
    this.setState({pages: Math.ceil(this.props.data.length/12)})
    axios
      .get(`https://nameless-wildwood-47841.herokuapp.com/img/page/1/12`)
      .then((res) => {
        console.log(res)
        this.setState({results:res.data})
      })
      .catch((err) => console.log(err));
  }

  


  render() {
    let listingNumbers = Math.ceil(this.props.data.length/12)
    let newNumbers = []
    newNumbers.length = listingNumbers
    newNumbers.fill(0)
// console.log(newNumbers)
    let pageindex = newNumbers.map((item,index)=><a href="#" data={index} onClick={this.pageInput} id={index}>{index}</a>)
    
    return (
      <div>
        {Math.ceil(this.props.data.length/12)}
        {listingNumbers}
        <div className="Pagination">
{/* 
        <Pagination
    defaultActivePage={1}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    totalPages={Math.ceil(this.props.data.length/12)}
    onClick={this.handleSelect}
  /> */}

        <Pagination className={colorPagination} items={Math.ceil(this.props.data.length/12)}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
                    next={true}
                    prev={true}
                    />
        </div>
        


        {/* <p>data:</p>
            
            {this.state.results.map((item=><p>{item.name}</p>))}
            Current Page: {this.state.activePage} */}


        
        <div className="imageListBase">
          {this.state.results.map((item) => (
            <Card url={item.imgageurl} name={item.name} id={item._id}></Card>
          ))}

        </div>
        
      </div>
    );
  }
}

export default Listing;
