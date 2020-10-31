import firebaseApp from "./firebase";

// const firebase = require("./firebase");
const axios = require("axios");

const AUTH_API = "http://localhost:9000/auth";

const signIn = async (username, password) => {
  // validate credentials

  let credValidation = await axios.post(`${AUTH_API}/users/validate`, {
    username: username,
    password: password,
  });
  if (credValidation.status != 200) throw new Error(credValidation.data);

  let userId = credValidation.data.id;

  // get user Data

  let user = await axios.get(`${AUTH_API}/users/${userId}`);
  if (user.status != 200) throw new Error(user.data);

  let userData = user.data;

  let tokenResponse = await axios.post(`${AUTH_API}/token`, {
    uid: userId,
    developerClaims: { user: userData },
  });

  if (tokenResponse.status != 200) throw new Error(tokenResponse.data);

  let token = tokenResponse.data.jwt;
  let signInResponse = firebaseApp.auth().signInWithCustomToken(tokenResponse);
  console.log(signInResponse);
};
export { signIn };

//  try {
//    let usersRef = firebaseApp.firestore().collection("users");
//    usersRef
//      .get()
//      .then((data) => {
//        console.log(data);
//      })
//      .catch((err) => {
//        console.error(err);
//      });
//    // usersRef
//    //   .where("username", "==", "admin")
//    //   .get()
//    //   .then((querySnapshot) => {
//    //     if (querySnapshot.empty || querySnapshot.size == 0)
//    //       throw new Error(`Username ${username} not found`);

//    //     let user = querySnapshot.docs[0].get();
//    //     console.log(user);
//    //   });
//    let { data: token } = await axios.post("http://localhost:9000/auth/token", {
//      uid: "admin",
//      developerClaims: { username: "Admin", displayName: "Admin" },
//    });

//    let credentials = await firebaseApp.auth().signInWithCustomToken(token.jwt);
//  } catch (err) {
//    console.log({ errorCode: err.code, errorMessage: err.message });
//  }
