import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Presentation from "./components/Presentation";
import "./styles.css";

ReactDOM.render(
  <Router>
    <Presentation />
  </Router>,
  document.getElementById("root")
);
