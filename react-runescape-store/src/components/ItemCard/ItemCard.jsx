import { Link } from "react-router-dom";
import { useState } from "react";
import { updateItem } from "../../services/stock";
import styles from "./ItemCard.module.scss";
import { Card, Button } from "react-bootstrap";

const ItemCard = ({ item, onUpdate, handleAddProduct, handleRemoveProduct }) => {
	const initialQty = item.quantity;
	const [quantity, setQuantity] = useState(initialQty);

	// const handleDecrement = async () => {
	// 	if (quantity > 0) {
	// 		const partial = {
	// 			quantity: quantity - 1,
	// 		};

	// 		setQuantity(quantity);

	// 		await updateItem(item.id, partial);

	// 		onUpdate();
	// 	}
	// };

	// const handleIncrement = async () => {
	// 	if (quantity < initialQty) {
	// 		const partial = {
	// 			quantity: quantity + 1,
	// 		};

	// 		setQuantity(partial.quantity);

	// 		await updateItem(item.id, partial);

	// 		onUpdate();
	// 	}
	// };

	return (
		<Card className={styles.itemCard}>
			<Card.Img variant="top" src={item.images} alt={item.name} />
			<Card.Body>
				<Card.Title>
					<Link to={`/items/${item.id}`}>{item.name}</Link>
				</Card.Title>
				<Card.Text>{item.examine}</Card.Text>
				<Card.Text>Price: ${item.price}.00</Card.Text>
				<Card.Text>Quantity Available: {item.quantity}</Card.Text>
			</Card.Body>
			<Card.Footer className={`text-muted ${styles.footerBtn}`}>
				{/* <Button variant="danger" onClick={handleIncrement}>
					Remove from Cart
				</Button> */}
				<Button variant="danger" onClick={() => handleRemoveProduct(item)}>
					Remove from Cart
				</Button>
				{/* <Button variant="success" onClick={handleDecrement}>
					Add to Cart
				</Button> */}
				<Button variant="success" onClick={() => handleAddProduct(item)}>
					Add to Cart
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default ItemCard;
