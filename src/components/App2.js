import React, { useState, useEffect } from "react";
import Header from "./header";
import CreateArea from "./CreateArea";
import Footer from "./footer";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
    }, [])

  return (
    <div className="App">
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
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

