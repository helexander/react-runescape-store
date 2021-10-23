import firestore from "./firestore";

// Cleaning item record
const cleanItem = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data()
});

const cleanItems = (querySnapshot) => {
    return querySnapshot.docs.map(cleanItem);
}

// Getting all items from firestore
export const getItems = async () => {
    const collectionRef = firestore.collection("items");
    const snapshot = await collectionRef.get();

    return cleanItems(snapshot);
};