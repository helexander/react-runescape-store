import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav/Nav";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";


function App() {

  return (
    <div className={`${styles.container_app}`}>
      <Router>
        <Navigation />
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
