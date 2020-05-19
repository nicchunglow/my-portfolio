import React from "react";
import "./App.css";
import ProjectContainer from "./ProjectContainer";
import SimpleMenu from "./SimpleMenu";
import { Container } from "@material-ui/core";
import Resume from "./Resume";
import { BrowserRouter, Route } from "react-router-dom";
import Directory from "./Directory"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "700px",
    marginTop: "1em",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className="App-header">
        <Container className={classes.root}>
          <SimpleMenu />
          <span className="App">
            <h2>Nicholas Chung Zhen Yang</h2>
            <h5>Digital Marketer turned Software Developer</h5>
            <p> Passionate to create </p>
            <Route exact path="/projects" component={ProjectContainer} />
            <Route exact path="/resume" component={Resume} />
          </span>
        </Container>
            <Directory/>
      </div>
    </BrowserRouter>
  );
}

export default App;
