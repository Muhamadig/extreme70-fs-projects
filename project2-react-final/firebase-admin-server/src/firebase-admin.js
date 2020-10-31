const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../private/movic-project2-firebase-adminsdk-n5tdf-369b601fd3.json");
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

/*
payload:{
  username:String
  password:String
}
*/
app.post("/auth/users/validate", async (req, res) => {
  let body = req.body;
  try {
    let result = await auth.validateCredentials(body);
    res.status(result.statusCode);
    res.send(result);
  } catch (err) {
    err.statusCode ? res.status(err.statusCode) : res.status(500);
    res.send(err);
  }
});
app.get("/auth/users/:userId", async (req, res) => {
  try {
    let result = await auth.getUserById(req.params.userId);
    res.status(200);
    res.send(result);
  } catch (err) {
    err.error ? res.status(err.error) : res.status(500);
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
