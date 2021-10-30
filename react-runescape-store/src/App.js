import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.scss";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav/Nav";
import ItemList from "./containers/ItemList";
import Item from "./components/Item";
import ItemCart from './containers/Cart';
import SavedItems from './containers/SavedItems';
import Footer from './components/Footer';

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

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? {
        ...ProductExist, quantity: ProductExist.quantity - 1
      }
        : item)
      );
    }
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  return (
    <div className={`${styles.container_app}`}>
      <Router>
        <Navigation cartItems={cartItems} />
        <Switch>
          <Route path="/" exact>
            <ItemList handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
          </Route>
          <Route path="/items/:id">
            <Item />
          </Route>
          <Route path="/cart">
            <ItemCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart} />
          </Route>
          <Route path="/saved">
            <SavedItems />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
