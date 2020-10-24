const firebase = require("firebase");
const axios = require("axios");
const firebaseConfig = require("../private/firebaseConfig.js");

export let initializeApp = () => {
  console.log(firebaseConfig);
  let result = firebase.app().initializeApp(firebaseConfig);
  console.log(result);
};
const signIn = async (username, password) => {
  try {
    let { data: token } = await axios.post("http://localhost:9000/auth/token", {
      uid: "admin",
      developerClaims: {},
    });
    console.log(token);
    let credentials = await firebase.auth().signInWithCustomToken(token.jwt);
    console.log(credentials);
  } catch (err) {
    console.log({ errorCode: err.code, errorMessage: err.message });
  }
};
export { signIn };
