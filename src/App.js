import React from "react";
import "./App.css";
import DancerNetwork from "./DancerNetwork";
import Snaphunt from "./Snaphunt";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App-header">
      <Container className="App">
        <h1>Nicholas Chung Zhen Yang</h1>
        <h3>Software Developer</h3>
        <h3>Past Projects</h3>
        <div className="flex">
          <DancerNetwork />
          <Snaphunt />
        </div>
      </Container>
    </div>
  );
}

export default App;
