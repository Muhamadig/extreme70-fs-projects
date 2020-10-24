const app = require("firebase/app");
const firebaseConfig = require("../private/firebaseConfig");

const initializeApp = () => {
  return app.initializeApp(firebaseConfig);
};

const firebase = initializeApp();
export default firebase;
