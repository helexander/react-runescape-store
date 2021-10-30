import { Link } from "react-router-dom";
import styles from "./ItemCard.module.scss";
import { Card, Button } from "react-bootstrap";

const ItemCard = ({ item, handleAddProduct, handleRemoveProduct }) => {

	return (
		<Card className={styles.itemCard}>
			<Card.Img variant="top" src={item.images} alt={item.name} className={styles.itemCardImg} />
			<Card.Body>
				<Card.Title>
					<Link to={`/items/${item.id}`}>{item.name}</Link>
				</Card.Title>
				<Card.Text>{item.examine}</Card.Text>
				<Card.Text>Price: ${item.price}.00</Card.Text>
				<Card.Text>Quantity Available: {item.quantity}</Card.Text>
			</Card.Body>
			<Card.Footer className={`text-muted ${styles.footerBtn}`}>
				<Button variant="danger" onClick={() => handleRemoveProduct(item)}>
					Remove from Cart
				</Button>
				<Button variant="success" onClick={() => handleAddProduct(item)}>
					Add to Cart
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default ItemCard;
