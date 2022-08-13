import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from './Components/Navigation';
function App() {

  const [data, setData] = useState({ gifImages: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://nameless-wildwood-47841.herokuapp.com/img/',
      );
      console.log(result.data)
      setData(result.data);
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <Navigation></Navigation>
    {/* TESTING
      {process.env.REACT_APP_API_URL} */}
    </div>
  );
}

export default App;
