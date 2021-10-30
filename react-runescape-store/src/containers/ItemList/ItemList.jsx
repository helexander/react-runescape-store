import ItemCard from '../../components/ItemCard/ItemCard';
import CarouselFeature from '../../components/Carousel';
import styles from "./ItemList.module.scss";
import { Container } from 'react-bootstrap';

const ItemList = ({ items, handleAddProduct, handleRemoveProduct }) => {

    return (
        <div>
            <CarouselFeature />
            <Container>
                <div className={styles.ItemsHome}>
                    {items &&
                        items.map((item, index) => (
                            <ItemCard item={item} key={index} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default ItemList
