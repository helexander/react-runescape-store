import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findItem } from "../../services/stock";

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
        <div>
            <img src={item.images} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Members Item: {item.members ? "true" : "false"}</p>
            <span>Quantity on hand: {item.quantity}</span>
        </div>
    )
}

export default Item
