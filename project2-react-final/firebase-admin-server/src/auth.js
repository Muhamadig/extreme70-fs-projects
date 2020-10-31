const admin = require("firebase-admin");

exports.createCustomToken = async (uid, developerClaims) => {
  let data;
  if (developerClaims)
    data = await admin.auth().createCustomToken(uid, developerClaims);
  else data = await admin.auth().createCustomToken(uid);

  return data;
};

exports.validateCredentials = (credentials) => {
  let result = {};
  return new Promise((resolve, reject) => {
    admin
      .firestore()
      .collection("users")
      .where("username", "==", credentials.username)
      .get()
      .then((documents) => {
        if (documents.empty || documents.docs.length == 0) {
          //Not Found
          result.statusCode = 404;
          result.message = `The Username '${credentials.username}' is not exist `;
          return reject(result);
        }
        // More than 1 user was found
        if (documents.docs.length > 1) {
          result.statusCode = 500;
          result.message = "Internal Server Error";
          return reject(result);
        }

        // One User Was Found
        let userDocument = documents.docs[0].data();

        if (userDocument.password !== credentials.password) {
          result.statusCode = 401;
          result.message = "Incorrect Password";
          return reject(result);
        }
        result.statusCode = 200;
        return resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
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
