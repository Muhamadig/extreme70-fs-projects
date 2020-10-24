import firebaseApp from "./firebase";

// const firebase = require("./firebase");
const axios = require("axios");

const signIn = async (username, password) => {
  try {
    let usersRef = firebaseApp.firestore().collection("users");
    usersRef
      .get()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
    // usersRef
    //   .where("username", "==", "admin")
    //   .get()
    //   .then((querySnapshot) => {
    //     if (querySnapshot.empty || querySnapshot.size == 0)
    //       throw new Error(`Username ${username} not found`);

    //     let user = querySnapshot.docs[0].get();
    //     console.log(user);
    //   });
    let { data: token } = await axios.post("http://localhost:9000/auth/token", {
      uid: "admin",
      developerClaims: { username: "Admin", displayName: "Admin" },
    });

    let credentials = await firebaseApp.auth().signInWithCustomToken(token.jwt);
  } catch (err) {
    console.log({ errorCode: err.code, errorMessage: err.message });
  }
};
export { signIn };
