// Firebase App (the core Firebase SDK) is always required and must be listed first
var firebase = require("firebase");
var app = require("firebase/app");
var analytics = require("firebase/analytics");
var auth = require("firebase/auth");
var firestore = require("firebase/firestore");
const firebaseAdmin = require("firebase-admin");

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
//   serviceAccountId:
//     "firebase-adminsdk-n5tdf@movic-project2.iam.gserviceaccount.com",
// Initialize Firebase
export let initializeApp = async () => {
  let init = firebase.initializeApp(firebaseConfig);
  let result = await firebase
    .auth()
    .signInWithCustomToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.9OPbM3qMRFJs8NZ3QE1ycbvsnAvWB5QHaCZaEqGFGgc"
    );
  console.log(init);
  console.log(result);
};
