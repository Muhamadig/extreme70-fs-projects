const firebase = require("firebase");
const jwt = require("jsonwebtoken");
const firebaseAdmin = require("firebase-admin");

// const init = () => {
//   firebaseAdmin.initializeApp({});
// };
const signIn = async (username, password) => {
  //   let token = jwt.sign({ username: "admin" }, "movic", {
  //     expiresIn: "3h",
  //   });
  try {
    let token = await firebaseAdmin.auth().createCustomToken("admin");
    let credentials = await firebase.auth().signInWithCustomToken(token);
    console.log(credentials);
  } catch (err) {
    console.log({ errorCode: err.code, errorMessage: err.message });
  }
};
export { signIn };
