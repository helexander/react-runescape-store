import { Link } from "react-router-dom";
import { useState } from "react";
import { updateItem } from "../../services/stock";

const ItemCard = ({ item, onUpdate }) => {
	const initialQty = item.quantity;
	const [quantity, setQuantity] = useState(initialQty);
	const imageItem = `/images/${item.name}.png`;

	const handleDecrement = async () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}

		const partial = {
			quantity: quantity,
		};

		await updateItem(item.id, partial);

		onUpdate();
	};

	const handleIncrement = async () => {
		if (quantity < initialQty) {
			setQuantity(quantity + 1);
		}

		const partial = {
			quantity: quantity,
		};

		await updateItem(item.id, partial);

		onUpdate();
	};

	return (
		<div className="card-deck">
			<div className="card">
				<img src={imageItem} alt={item.examine} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">{item.examine}</p>
					<button onClick={handleDecrement}>-</button>
					<span>Quantity: {quantity}</span>
					<button onClick={handleIncrement}>+</button>
				</div>
				<div className="card-footer">
					<p>
						<Link to={`/items/${item.id}`}>{item.name}</Link>
					</p>
				</div>
			</div>
			<p key={item.id}>ID: {item.id}</p>
			<p>Name: {item.name}</p>
			<p>{item.examine}</p>
		</div>
	);
};

export default ItemCard;
