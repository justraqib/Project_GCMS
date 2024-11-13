import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const API_BASE_URL = "http://localhost:5000/api/data"; // Backend URL

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      {data.length > 0 ? (
        data.map((item, index) => <p key={index}>{item.message}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
