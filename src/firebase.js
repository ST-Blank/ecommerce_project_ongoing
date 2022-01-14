import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD790-WJGsGdIx-SA7vqp4TjvLERopRjaY",
    authDomain: "clone-ec675.firebaseapp.com",
    projectId: "clone-ec675",
    storageBucket: "clone-ec675.appspot.com",
    messagingSenderId: "536585156692",
    appId: "1:536585156692:web:da1e1c96fd3c429db295c1",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };