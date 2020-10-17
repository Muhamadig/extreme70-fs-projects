const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../private/movic-project2-firebase-adminsdk-n5tdf-dc104cb9e4.json");
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
