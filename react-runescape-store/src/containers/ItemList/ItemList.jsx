import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from '../../components/Item';
import { getItems } from '../../services/stock';
import scimitar from "../../images/scimitar.png";
import defender from "../../images/defender.png";
import arrows from "../../images/arrows.png";
import cape from "../../images/cape.png";
import platebody from "../../images/platebody.png";

const ItemCard = ({ item }) => {


    return (
        <div>
            <p key={item.id}>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>{item.examine}</p>
            <p>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
            </p>


        </div>
    )
}

const ItemList = () => {
    const [items, setItems] = useState(null);

    const populateItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    useEffect(() => populateItems(), []);


    return (
        <div>
            {items &&
                items.map((item, index) => (
                    <ItemCard item={item} key={index} />
                ))
            }
        </div>
    )
}

export default ItemList
