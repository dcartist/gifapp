import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from "./Pages/Results"
import { MDBBtn } from 'mdb-react-ui-kit';
import Navigation from './Components/Navigation';
import useAxios from "axios-hooks";
function App() {

  const [dataAxios, setData] = useState([]);

function fetchingData() {
  axios.get(`${process.env.REACT_APP_API_URL}`)
      .then(res => {
        console.log(res.data)
        setData(res.data);
      })

}


const [{ data, loading, error }, refetch] = useAxios(`${process.env.REACT_APP_API_URL}`);

// fetchingData()

  return (
    <div className="App">
      <Navigation></Navigation>
    {/* TESTING
      {process.env.REACT_APP_API_URL} */}
      {/* <MDBBtn onClick={fetchingData}>click to activate</MDBBtn> */}
      <Results data={data}></Results>
    </div>
  );
}

export default App;
