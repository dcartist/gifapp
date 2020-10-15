import React, { Component } from 'react';
import axios from "axios";
import "pivotal-ui/css/copy-to-clipboard";
import "pivotal-ui/css/buttons";
import Card from "../Cards/Materials/Card";
import 'pivotal-ui/css/pagination';
import "./imageList.css";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results:[],
          pageListing: 90,
          pages: 0,
          listNumber: 0,
          newActivePage: this.props.match.params.pagenumber,
          pageListArray: [],
          currentPage: 0,
          activePage: 1
        };
      }

      componentDidMount() {
        const theparam = this.props.match.params.pagenumber
        this.setState({pages: Math.ceil(this.props.data.length/12)})
        console.log(theparam)
        axios
          // .get(`https://nameless-wildwood-47841.herokuapp.com/img/page/1/12`)
          
          .get(`https://nameless-wildwood-47841.herokuapp.com/img/page/${theparam}/12`)
          .then((res) => {
            console.log(res)
            this.setState({results:res.data})
          })
          .catch((err) => console.log(err));
          console.log(theparam)
      }


    handleSelect = (event, selectedEvent) =>{
        this.setState({results:[]})
        const newActivePage = selectedEvent.newActivePage;
        console.log(newActivePage)
        this.setState({activePage: newActivePage});
        axios.get(`https://nameless-wildwood-47841.herokuapp.com/img/page/${newActivePage}/12`).then((res) => {
            console.log(res)
            this.setState({results:res.data})
          })
          .catch((err) => console.log(err));
      }

    render() {
        return (
            <div>
              test
                 <div className="imageListBase">
          {this.state.results.map((item) => (
            <Card url={item.imgageurl} name={item.name} id={item._id}></Card>
          ))}

        </div>
            </div>
        );
    }
    
}

export default Pagination;