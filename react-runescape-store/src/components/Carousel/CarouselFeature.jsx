import "./Carousel.module.scss";
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
    <Carousel controls={false} pause={"hover"}>

      {featuredItems.map((featuredItem, index) => {
        return (
          <Carousel.Item key={index} interval={4000}>
            <Image
              className="d-block w-60"
              src={featuredItem.images}
              alt={featuredItem.examine}
            />
            <Carousel.Caption>
              <h3>{featuredItem.name}</h3>
              <p>{featuredItem.examine}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
      }

    </Carousel>
  )
}

export default CarouselFeature;
