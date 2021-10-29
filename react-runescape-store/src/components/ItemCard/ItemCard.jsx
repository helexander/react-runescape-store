import { Link } from "react-router-dom";
import { useState } from "react";
import { updateItem } from "../../services/stock";
import styles from "./ItemCard.module.scss";
import { Card, Button, Col } from "react-bootstrap";

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
		<Col className="mt-4">
			<Card className={styles.itemCard}>
				<Card.Img variant="top" src={imageItem} alt={item.name} />
				<Card.Body>
					<Card.Title>
						<Link to={`/items/${item.id}`}>{item.name}</Link>
					</Card.Title>
					<Card.Text>{item.examine}</Card.Text>
					<Card.Text>Price: ${item.price}.00</Card.Text>
					<Card.Text>Quantity Available: {item.quantity}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<Button variant="danger" onClick={handleIncrement}>
						Remove from Cart
					</Button>
					<Button variant="success" onClick={handleDecrement}>
						Add to Cart
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default ItemCard;
