import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import CreateArea from "./CreateArea";
import Footer from "./footer";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api");
        const data = response.data;
        alert("Fetched data:", data);

        if (Array.isArray(data)) {
          setBackendData(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setBackendData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map(() => (
          <div>
          <Header />
          <CreateArea />
          <Footer />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
