import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findItem, updateItem } from "../../services/stock";
import styles from "./Item.module.scss";
import { Button, Container } from "react-bootstrap";

const ItemDetails = ({ item, onSubmit }) => {
    const [saveState, setSaveState] = useState(item.saved);

    console.log(item.saved);

    const removeSave = async () => {
        setSaveState(false);

        const partial = {
            saved: saveState
        }

        await updateItem(item.id, partial);

        onSubmit();
    }

    const addSave = async () => {
        setSaveState(true);

        const partial = {
            saved: saveState
        }

        await updateItem(item.id, partial);

        onSubmit();
    }


    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemInfoContainer}>
                <h1 className={styles.itemName}>{item.name}</h1>
                <img src={item.images} alt={item.name} className={styles.itemImage} />
                <p className={styles.itemDesc}>{item.description}</p>
                <p>Members Item: {item.members ? "true" : "false"}</p>
                <p>Quantity on hand: {item.quantity}</p>
                {item.saved ? <Button variant="danger" onClick={removeSave} >Remove from Saved Items</Button> : <Button variant="success" onClick={addSave}>Add to Saved Items</Button>}
            </div>
        </div>
    )
}

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    const populateItem = async () => {
        const data = await findItem(id);
        setItem(data);
    };

    useEffect(() => {
        populateItem();
    }, []);

    const handleChange = () => {
        populateItem();
    };


    if (!item) {
        return <h1>Item with ID: {id} could not be found.</h1>;
    }

    return (
        <Container>
            <ItemDetails item={item} onSubmit={handleChange} />
        </Container>
    )
}

export default Item
