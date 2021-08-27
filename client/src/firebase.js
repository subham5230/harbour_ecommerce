import firebase from 'firebase/app';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB5gj_ngW_lHo_4FQFeJIdvTmY9pkvS2Eg",
    authDomain: "harbour-d6df7.firebaseapp.com",
    projectId: "harbour-d6df7",
    storageBucket: "harbour-d6df7.appspot.com",
    messagingSenderId: "542926970752",
    appId: "1:542926970752:web:c6584a27e846207fdb2b65"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();