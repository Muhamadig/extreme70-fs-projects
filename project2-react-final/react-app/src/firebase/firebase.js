const app = require("firebase/app");
const firebaseConfig = require("../private/firebaseConfig");

export let initializeApp = () => {
  console.log(firebaseConfig.default);

  let result = app.initializeApp(firebaseConfig.default);
  result.auth.name;
  console.log(result);
};
