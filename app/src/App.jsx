import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null); // Set to null initially
  const API_BASE_URL = "http://localhost:5000/api/data"; // Backend URL

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const result = await response.json();
      setData(result.message); // Update the state with the message from the backend
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>React-Express-MongoDB Connection</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
