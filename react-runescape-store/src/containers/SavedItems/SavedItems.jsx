import React, { useState, useEffect } from 'react';
import { getSavedItem, updateItem } from '../../services/stock';
import styles from "./SavedItems.module.scss";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SavedCard = ({ savedItem, index, onSubmit }) => {

    const [saveState, setSaveState] = useState(savedItem.saved)

    const removeSaved = async () => {
        setSaveState(false);

        const partial = {
            saved: saveState
        }

        await updateItem(savedItem.id, partial);

        onSubmit();
    }

    return (
        <Card className={styles.savedCard} key={index}>
            <Card.Img variant="top" src={savedItem.images} alt={savedItem.name} className={styles.savedCardImg} />
            <Card.Body>
                <Card.Title>
                    <Link to={`/items/${savedItem.id}`}>{savedItem.name}</Link>
                </Card.Title>
                <Card.Text>{savedItem.examine}</Card.Text>
                <Card.Text>Price: ${savedItem.price}.00</Card.Text>
            </Card.Body>
            <Card.Footer className={`text-muted ${styles.footerBtn}`}>
                <Button variant="danger" onClick={removeSaved}>Remove from Saved Items</Button>
            </Card.Footer>
        </Card>
    )
}


const SavedItems = () => {
    const [saved, setSaved] = useState(null);

    const allSavedItems = async () => {
        const data = await getSavedItem();
        // console.log("These are the saved items: " + data);
        setSaved(data);
    };

    useEffect(() => {
        allSavedItems();
    }, []);

    const handleSubmit = () => {
        allSavedItems();
    };


    if (saved === null || saved === {}) {
        return (
            <div>
                <p>There were no saved items found</p>
            </div>
        );
    }

    return (
        <div className={styles.savedCardContainer}>
            {saved.map((savedItem, index) => {
                return (
                    <SavedCard savedItem={savedItem} key={index} onSubmit={handleSubmit} />
                )
            })}

        </div>
    )
}

export default SavedItems
