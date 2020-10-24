const admin = require("firebase-admin");

exports.createCustomToken = async (uid, developerClaims) => {
  let data;
  if (developerClaims)
    data = await admin.auth().createCustomToken(uid, developerClaims);
  else data = await admin.auth().createCustomToken(uid);

  return data;
};
