import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAECqDzBC5WPQzar5cCJy7dP3RoLnl9GZQ",
    authDomain: "react-runescape-store.firebaseapp.com",
    projectId: "react-runescape-store",
    storageBucket: "react-runescape-store.appspot.com",
    messagingSenderId: "762356345427",
    appId: "1:762356345427:web:76d6b9d93f27e2098374a6"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
