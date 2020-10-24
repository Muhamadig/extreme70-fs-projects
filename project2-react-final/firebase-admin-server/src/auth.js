const admin = require("firebase-admin");

exports.createCustomToken = async (uid, developerClaims) => {
  let data;
  if (developerClaims)
    data = await admin.auth().createCustomToken(uid, developerClaims);
  else data = await admin.auth().createCustomToken(uid);

  return data;
};

exports.getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    admin
      .firestore()
      .collection("users")
      .where("username", "==", username)
      .get()
      .then((data) => {
        if (data.docs.length == 0)
          reject({ statusCode: 404, message: `User ${username} Not Found` });
        console.log(data.docs[0].data());
        resolve(data.docs[0].data());
      })
      .catch((err) => {
        reject({ statusCode: 500, message: `${err.message}` });
      });
  });
};
