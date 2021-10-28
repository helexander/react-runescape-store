import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";
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
