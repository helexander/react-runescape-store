import React, { useEffect, useState } from 'react'
import { getItems } from '../../services/stock';
import ItemCard from '../../components/ItemCard/ItemCard';
import CarouselFeature from '../../components/Carousel';
import styles from "./ItemList.module.scss";
import { Container } from 'react-bootstrap';

const ItemList = ({ handleAddProduct }) => {
    const [items, setItems] = useState(null);

    const populateItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    useEffect(() => populateItems(), []);
    const handleQuantity = () => populateItems();

    return (
        <div>
            <CarouselFeature />
            <Container>
                <div className={styles.ItemsHome}>
                    {items &&
                        items.map((item, index) => (
                            <ItemCard item={item} key={index} onUpdate={handleQuantity} handleAddProduct={handleAddProduct} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default ItemList
