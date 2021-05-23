import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAHps3hQB8tpZHmDNLAJ0EzObVDVVS-o6M",
    authDomain: "facebook-clone-2f929.firebaseapp.com",
    projectId: "facebook-clone-2f929",
    storageBucket: "facebook-clone-2f929.appspot.com",
    messagingSenderId: "955381577153",
    appId: "1:955381577153:web:8de8e0fe9b61709d292b40"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };