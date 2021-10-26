import React, { useEffect, useState } from 'react'
import { getItems } from '../../services/stock';
import ItemCard from '../../components/ItemCard/ItemCard';
import Carousel from '../../components/Carousel';
import styles from "./ItemList.module.scss";

const ItemList = () => {
    const [items, setItems] = useState(null);

    const populateItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    useEffect(() => populateItems(), []);
    const handleQuantity = () => populateItems();

    return (
        <div>
            <Carousel />
            <div className={styles.ItemsHome}>
                {items &&
                    items.map((item, index) => (
                        <ItemCard item={item} key={index} onUpdate={handleQuantity} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
