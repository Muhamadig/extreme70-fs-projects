import firebaseApp from "./firebase";
const firebaseAuth = require("firebase/auth");

// const firebase = require("./firebase");
const axios = require("axios");

const signIn = async (username, password) => {
  try {
    let { data: token } = await axios.post("http://localhost:9000/auth/token", {
      uid: "admin",
      developerClaims: {},
    });
    console.log("firebaseApp", firebaseApp.auth());
    console.log(token.jwt);
    let credentials = await firebaseApp.auth().signInWithCustomToken(token.jwt);

    console.log(credentials);
  } catch (err) {
    console.log({ errorCode: err.code, errorMessage: err.message });
  }
};
export { signIn };
