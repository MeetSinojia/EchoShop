// import firebase from "firebase/functions";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGd62SUkBNqtwtRCA4MSMWU6j9kkm076E",
  authDomain: "clone-ee4a4.firebaseapp.com",
  projectId: "clone-ee4a4",
  storageBucket: "clone-ee4a4.appspot.com",
  messagingSenderId: "601593763404",
  appId: "1:601593763404:web:d0d6857eb5f195aae006e9",
  measurementId: "G-YRJK0KW9ER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };