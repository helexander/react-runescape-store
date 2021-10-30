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

// Getting featured items from firestore
export const getFeaturedItem = async () => {
    const collectionRef = firestore.collection("items");
    const querySnap = await collectionRef.get();
    const clearedData = cleanItems(querySnap);
    const featuredTrue = clearedData.filter(
        (featuredTrue) => featuredTrue.featured
    );

    return featuredTrue;
};

// Getting saved items from firestore 
export const getSavedItem = async () => {
    const collectionRef = firestore.collection("items");
    const querySnap = await collectionRef.get();
    const clearedData = cleanItems(querySnap);
    const savedTrue = clearedData.filter(
        (savedTrue) => savedTrue.featured
    );

    return savedTrue;
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