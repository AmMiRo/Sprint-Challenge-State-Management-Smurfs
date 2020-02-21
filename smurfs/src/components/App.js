import React, { useState, useEffect } from "react";
import axios from "axios";
import { SmurfContext } from "../contexts/SmurfContext";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("Server Smurf Data", res.data);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <SmurfForm />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
