import React from "react";
import "./App.css";
import DancerNetwork from "./DancerNetwork";
import Snaphunt from "./Snaphunt";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App-header">
      <Container className="App">
        <h2>Nicholas Chung Zhen Yang</h2>
        <p>Marketer turned Software Developer</p>
        <h4>Past Projects</h4>
        <div className="flex">
          <DancerNetwork />
          <Snaphunt />
        </div>
      </Container>
    </div>
  );
}

export default App;
