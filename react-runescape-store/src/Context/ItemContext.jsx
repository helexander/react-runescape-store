// import { createContext, useState, useEffect } from "react";
// import { getItems } from "../services/stock";

// export const ItemContext = createContext();

// const ItemProvider = ({ children }) => {

//     const [items, setItems] = useState(null);
//     const [image, setImage] = useState("");

//     // similar to setting an image, this would also need a useEffect 
//     // const [quantity, setQuantity] = useState(items.quantity);

//     const populateItems = async () => {
//         const data = await getItems();
//         setItems(data);
//     };

//     useEffect(() => populateItems(), []);

//     // useEffect(() => {
//     //     const imageSet = async () => {
//     //         await setImage(`/images/${items.name}.png`);
//     //     }

//     //     imageSet();
//     // }
//     //     , [items]);

//     const data = { items }

//     return (
//         <ItemContext.Provider value={data}>{children}</ItemContext.Provider>
//     )
// }

// export default ItemProvider