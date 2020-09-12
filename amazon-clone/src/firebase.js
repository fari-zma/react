import firebase from "firebase";

const firebaseConfig = {
  // firebase config
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
