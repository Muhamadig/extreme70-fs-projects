const app = require("firebase/app");
const firebaseConfig = require("../private/firebaseConfig");

export let initializeApp = () => {
  return app.initializeApp(firebaseConfig);
};
