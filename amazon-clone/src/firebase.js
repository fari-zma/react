import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC24W-lPFaTm5jHWbMKLme0GucGyLGKBh8",
  authDomain: "challenge-666fe.firebaseapp.com",
  databaseURL: "https://challenge-666fe.firebaseio.com",
  projectId: "challenge-666fe",
  storageBucket: "challenge-666fe.appspot.com",
  messagingSenderId: "888683706255",
  appId: "1:888683706255:web:9ca6202fef20e8010a7dfa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
