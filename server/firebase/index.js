var admin = require("firebase-admin");

var serviceAccount = require("../config/firebaseServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://harbour-d6df7.firebaseio.com'
});

module.exports = admin;