const app = require("firebase/app");
const firebaseConfig = require("../private/firebaseConfig");

export let initializeApp = async () => {
  return app.initializeApp(firebaseConfig);
};
