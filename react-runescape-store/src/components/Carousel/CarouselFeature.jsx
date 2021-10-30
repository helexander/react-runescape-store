import styles from "./Carousel.module.scss";
import { Carousel, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getFeaturedItem } from "../../services/stock";

const CarouselFeature = () => {
  const [featuredItems, setFeaturedItems] = useState(null);
  useEffect(() => {
    const allFeaturedItems = async () => {
      const data = await getFeaturedItem();
      setFeaturedItems(data);
    };

    allFeaturedItems();
  }, []);

  if (featuredItems === null) {
    return (
      <div>
        <p>There were no featured items found</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <Carousel controls={false} pause={"hover"} className={styles.myCarousel}>

        {featuredItems.map((featuredItem, index) => {
          return (
            <Carousel.Item key={index} interval={5000} className={styles.carouselItem}>
              <Image
                className={`d-block w-60 ${styles.carouselImg}`}
                src={featuredItem.images}
                alt={featuredItem.examine}
              />
              <Carousel.Caption className={styles.carouselBody}>
                <h3>{featuredItem.name}</h3>
                <p>{featuredItem.examine}</p>
                <p>${featuredItem.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
        }

      </Carousel>
    </div>
  )
}

export default CarouselFeature;
