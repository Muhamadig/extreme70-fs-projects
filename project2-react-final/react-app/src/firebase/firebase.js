const firebase = require("firebase");
const firebaseAuth = require("firebase/auth");
const firebaseConfig = require("../private/firebaseConfig");

const firebaseApp = firebase.initializeApp(firebaseConfig.firebaseConfig);

export default firebaseApp;
