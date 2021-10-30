import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findItem } from "../../services/stock";
import styles from "./Item.module.scss";
import { Button, Container } from "react-bootstrap";

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const populateItem = async () => {
            const data = await findItem(id);
            setItem(data);
        };

        populateItem();
    }, [id]);

    if (!item) {
        return <h1>Item with ID: {id} could not be found.</h1>;
    }

    return (
        <Container>
            <div className={styles.itemContainer}>
                <div className={styles.itemInfoContainer}>
                    <h1 className={styles.itemName}>{item.name}</h1>
                    <img src={item.images} alt={item.name} className={styles.itemImage} />
                    <p className={styles.itemDesc}>{item.description}</p>
                    <p>Members Item: {item.members ? "true" : "false"}</p>
                    <p>Quantity on hand: {item.quantity}</p>
                    <Button variant="success">Add to Saved Items</Button>
                </div>
            </div>
        </Container>
    )
}

export default Item
