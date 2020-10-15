const firebase = require("firebase");
const jwt = require("jsonwebtoken");
const signIn = (username, password) => {
  let token = jwt.sign({ username: "admin" }, "movic", {
    expiresIn: "3h",
  });
  return token;
};
export { signIn };
