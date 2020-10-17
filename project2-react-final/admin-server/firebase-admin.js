const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../private/movic-project2-firebase-adminsdk-n5tdf-dc104cb9e4.json");
const http = require("http");
const auth = require("./auth");
const cors = require("cors");

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post("/auth/token", async (req, res) => {
  let body = req.body;
  let result = await auth.createCustomToken(body.uid, body.developerClaims);

  res.contentType("application/json");
  res.send({ jwt: result });
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
// let server = http.createServer(function (req, res) {
//   let data = [];
//   let method = req.method;
//   let url = req.url;
//   let payload;
//   req.on("data", (chunk) => {
//     data.push(chunk);

//     console.log(data);
//   });
//   req.on("end", async () => {
//     console.log(data);
//     payload = JSON.parse(data);
//     console.log(payload.uid);
//     let result = await auth.createCustomToken(
//       payload.uid,
//       payload.developerClaims
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin,X-Requested-With,Content-Type,Accept"
//     );
//     res.write(result);
//     res.end();
//   });
// });

// server.listen(9000);
// console.log("Server started on port 9000");
