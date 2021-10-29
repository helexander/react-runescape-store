import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.scss";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav/Nav";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";
import ItemCart from './containers/Cart';
import SavedItems from './containers/SavedItems';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        {
          ...ProductExist,
          quantity: ProductExist.quantity + 1
        }
        : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

  }

  return (
    <div className={`${styles.container_app}`}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <ItemList handleAddProduct={handleAddProduct} />
          </Route>
          <Route path="/items/:id">
            <Item />
          </Route>
          <Route path="/cart">
            <ItemCart cartItems={cartItems} handleAddProduct={handleAddProduct} />
          </Route>
          <Route path="/saved">
            <SavedItems />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
