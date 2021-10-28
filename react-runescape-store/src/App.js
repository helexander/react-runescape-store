import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";
import { getItems } from "./services/stock";
import styles from "./App.module.scss";

function App() {

  return (
    <div className={styles.container_app}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <ItemList />
          </Route>
          <Route path="/items/:id">
            <Item />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
