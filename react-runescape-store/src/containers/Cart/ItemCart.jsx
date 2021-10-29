import React from 'react'
import styles from "./ItemCart.module.scss";

const ItemCart = ({ cartItems }) => {
    return (
        <div className={`${styles.cartItems}`}>
            <div className={`${styles.cartItemsHeader}`}>Cart Items</div>

            {cartItems.length === 0 && (<div className={`${styles.cartItemsEmpty}`}>No items were added to the cart</div>)}

            <div>
                {cartItems.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.cartItemsList}`}>
                            <img className={`${styles.cartItemsImage}`} src={item.images} alt={item.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemCart
