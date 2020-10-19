import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_WNIZlU8AAFi4XQGYTTe_GcaHWfIZgTk",
  authDomain: "royal-clothing-abc68.firebaseapp.com",
  databaseURL: "https://royal-clothing-abc68.firebaseio.com",
  projectId: "royal-clothing-abc68",
  storageBucket: "royal-clothing-abc68.appspot.com",
  messagingSenderId: "302666075246",
  appId: "1:302666075246:web:9b11e96ca2a79f6cbbaa7f",
  measurementId: "G-J56ZYGE19V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// to signIn with google popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// to signIn with google popup

export default firebase;
