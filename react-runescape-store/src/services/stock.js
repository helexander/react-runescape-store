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

// Getting a specific item from firestore
export const findItem = async (id) => {
    const collectionRef = firestore.collection("items");
    const docRef = collectionRef.doc(id);
    const docSnap = await docRef.get();

    return cleanItem(docSnap);
};

// Updating item quantity in firestore
export const updateItem = async (id, partial) => {
    const collectionRef = firestore.collection("items");
    const docRef = collectionRef.doc(id);
    await docRef.update(partial);
}