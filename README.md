# Le Grand XChange
## Project: React Ecommerce
*Create a React Ecommerce Application*

## Requirements:
- [x] 2 pages:
  - [x] Home Page
  - [x] Specific Item

- [x] Grid of products
  - [x] Carousel of featured products
  - [x] Product Page (with id parameter)
*Similar to a product page on another site, allows you to add to cart and select product variants*

- [ ] All products should be stored in firestore, you should store the following information:
  - [x] Quantity
  - [ ] Variants (could be colors, sizes, etc)
  - [x] Price per unit
  - [x] Name
  - [x] Image url
  - [x] Members item (boolean)

- [ ] All data should be stored in firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus:
- [ ] Using firestore and react create a cart system
  - [ ] Create a cart page in your react app
- [ ] Add logic to prevent users from adding items to cart that are no longer in stock
- [ ] You will have to check the current cart and the product quantity
- [ ] Cart page should have the following:
  - [ ] List of products in cart
  - [ ] ability to change quantity of products in cart
  - [ ] ability to remove entries from cart
