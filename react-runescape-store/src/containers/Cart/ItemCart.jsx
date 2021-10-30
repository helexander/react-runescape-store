import React from 'react'
import { Button } from 'react-bootstrap';
import styles from "./ItemCart.module.scss";

const ItemCart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {
    const totalPrice = cartItems.reduce((price, item) => (price + (item.quantity * item.price)), 0);

    return (
        <div className={`${styles.cartItems}`}>
            <h2 className={`${styles.cartItemsHeader}`}>Cart Items</h2>
            <div className={`${styles.cartItemsBtnClear}`}>
                {cartItems.length >= 1 && (
                    <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
                )}
            </div>

            {cartItems.length === 0 && (<div className={`${styles.cartItemsEmpty}`}>No items were added to the cart</div>)}

            <div>
                {cartItems.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.cartItemsList}`}>
                            <img className={`${styles.cartItemsImage}`} src={item.images} alt={item.name} />
                            <div className={`${styles.cartItemsName}`}>{item.name}</div>
                            <div className={`${styles.cartItemsBtn}`}>

                                <Button variant="danger" className={`${styles.cartItemsBtnRemove}`} onClick={() => handleRemoveProduct(item)}>-</Button>
                                <Button variant="success" className={`${styles.cartItemsBtnAdd}`} onClick={() => handleAddProduct(item)}>+</Button>
                            </div>
                            <div className={`${styles.cartItemsPrice}`}>
                                {item.quantity} * ${item.price}.00
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={`${styles.cartItemsTotalContainer}`}>

                <div className={`${styles.cartItemsTotalText}`}>
                    Total Price
                </div>
                <div className={`${styles.cartItemsTotalPrice}`}>
                    ${totalPrice}
                </div>
            </div>
        </div>
    )
}

export default ItemCart
