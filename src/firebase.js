import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD7Jj3QHTnYQNa4uAFuVMJgiLcyD99wc0",
  authDomain: "tennis-9d8e7.firebaseapp.com",
  databaseURL: "https://tennis-9d8e7.firebaseio.com",
  projectId: "tennis-9d8e7",
  storageBucket: "tennis-9d8e7.appspot.com",
  messagingSenderId: "766321106888",
  appId: "1:766321106888:web:6b470d2d88ef3267462afd",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers,
};
