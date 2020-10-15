// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSesGMHhffESLm9aA5stqiWlfQ4mwTENo",
  authDomain: "movic-project2.firebaseapp.com",
  databaseURL: "https://movic-project2.firebaseio.com",
  projectId: "movic-project2",
  storageBucket: "movic-project2.appspot.com",
  messagingSenderId: "1096121906798",
  appId: "1:1096121906798:web:e111db7d44c6e69c43187f",
  measurementId: "G-DF9S7WMEVM",
};
// Initialize Firebase
export let initializeApp = () => {
  firebase.initializeApp(firebaseConfig);
};
