import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findItem } from "../../services/stock";

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    // const [quantity, setQuantity] = useState(item.quantity);

    // const handleIncrement = () => {
    //     if (quantity < item.quantity) {
    //         setQuantity(quantity + 1);
    //     }
    // }

    // const handleDecrement = () => {
    //     if (quantity > 0) {
    //         setQuantity(quantity - 1);
    //     }
    // }

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

            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Members Item: {item.members ? "true" : "false"}</p>
            <span>Quantity on hand: {item.quantity}</span>
        </div>
    )
}

export default Item
