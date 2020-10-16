var admin = require("firebase-admin");
const serviceAccount = require("../private/movic-project2-firebase-adminsdk-n5tdf-dc104cb9e4.json");
const http = require("http");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let server = http.createServer(function (req, res) {
  let token;
  admin
    .auth()
    .createCustomToken("movic")
    .then((token) => {
      console.log(token);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.listen(9000);
console.log("Server started on port 9000");
