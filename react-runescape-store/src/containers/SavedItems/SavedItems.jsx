import React, { useState, useEffect } from 'react';
import { getSavedItem } from '../../services/stock';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./SavedItems.module.scss";

const SavedItems = () => {
    const [saved, setSaved] = useState(null);

    useEffect(() => {
        const allSavedItems = async () => {
            const data = await getSavedItem();
            setSaved(data);
        };

        allSavedItems();
    }, []);

    if (saved === null) {
        return (
            <div>
                <p>There were no saved items found</p>
            </div>
        );
    }

    const handleRemove = () => {
        console.log("This item has been set to false")
    }

    return (
        <div>
            {saved.map((savedItem, index) => {
                return (
                    <Card className={styles.savedCard} key={index}>
                        <Card.Img variant="top" src={savedItem.images} alt={savedItem.name} />
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/items/${savedItem.id}`}>{savedItem.name}</Link>
                            </Card.Title>
                            <Card.Text>{savedItem.examine}</Card.Text>
                            <Card.Text>Price: ${savedItem.price}.00</Card.Text>
                        </Card.Body>
                        <Card.Footer className={`text-muted ${styles.footerBtn}`}>
                            <Button variant="danger" onClick={handleRemove}>
                                Remove from saved items
                            </Button>
                        </Card.Footer>
                    </Card>
                )
            })}

        </div>
    )
}

export default SavedItems
