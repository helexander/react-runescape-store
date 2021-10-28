import { Link } from "react-router-dom";
import { useState } from "react";
import { updateItem } from "../../services/stock";
import styles from "./ItemCard.module.scss";

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
			<div className={`card ${styles.ItemsHome} text-center`}>
				<img src={imageItem} alt={item.examine} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">
						<Link to={`/items/${item.id}`}>{item.name}</Link>
					</h5>
					<p className="card-text">{item.examine}</p>
					<p>
						Price: <b>${item.price}.00</b>
					</p>
					<button
						className="btn btn-danger rounded-circle"
						onClick={handleDecrement}
					>
						-
					</button>
					<span>Quantity: {quantity}</span>
					<button
						className="btn btn-success rounded-circle"
						onClick={handleIncrement}
					>
						+
					</button>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary rounded-pill">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
