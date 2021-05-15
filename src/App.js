import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
//components
import Bid from "./components/Bid";
//styles
import "./styles/App.scss";
const App = () => {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Redirect to="/bid/1" />} />
      <Route exact path="/bid/:id" component={Bid} />
    </Router>
  );
};

export default App;
