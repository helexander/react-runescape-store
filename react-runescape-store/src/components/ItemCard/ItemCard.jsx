import { Link } from "react-router-dom"

const ItemCard = ({ item }) => {
    return (
        <div>
            <p key={item.id}>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>{item.examine}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
            </p>

        </div>
    )
}

export default ItemCard
