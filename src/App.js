import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

function App() {


  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch count data from Google Analytics API
    const fetchData = async () => {
      try {
        const analyticsData = await ReactGA.pageview(window.location.pathname + window.location.search);
        // Extract count information from analyticsData and update the state
        setCount(analyticsData.count); // This is just a hypothetical example; adjust based on your actual data
      } catch (error) {
        console.error('Error fetching data from Google Analytics:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 className="App-logo">😄</h1>
        </div>

        <h1 >
          TUTORIAL FOR GOOGLE ANALYTICS..............
        </h1>
        <h1>LIVE REACT APPLICATION</h1>

        <h1> DISPLAY COUNT : {count}</h1>
      </header>
    </div>
  );
}

export default App;
