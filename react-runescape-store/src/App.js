import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Item from "./components/Item";

function App() {

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/items/:id">
        <Item />
      </Route>
    </Router>
  );
}

export default App;
