import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBrmueH3l2NP31T-xlLw0BYGN7-ySYm7mI",
    authDomain: "nextjs-whatsapp2-38d51.firebaseapp.com",
    projectId: "nextjs-whatsapp2-38d51",
    storageBucket: "nextjs-whatsapp2-38d51.appspot.com",
    messagingSenderId: "305875910499",
    appId: "1:305875910499:web:b375a9fb431197ef30dd56"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };