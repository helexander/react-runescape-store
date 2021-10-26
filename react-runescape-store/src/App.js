import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";
import { getItems } from "./services/stock";
import "./App.module.scss";

function App() {

  const [items, setItems] = useState(null);

  const populateItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => populateItems(), []);
  const handleQuantity = () => populateItems();

  return (
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
  );
}

export default App;
