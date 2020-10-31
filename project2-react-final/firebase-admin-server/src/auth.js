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
        let userDocument = documents.docs[0];

        if (userDocument.data().password !== credentials.password) {
          result.statusCode = 401;
          result.message = "Incorrect Password";
          return reject(result);
        }
        result.statusCode = 200;
        result.id = userDocument.id;
        return resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    admin
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then((user) => {
        if (!user.exists)
          return reject({ error: 404, message: "User Not Found" });
        let userDocument = user.data();
        delete userDocument.password;
        return resolve(userDocument);
      })
      .catch((err) => {
        reject({ error: 500, message: `${err.message}` });
      });
  });
};
