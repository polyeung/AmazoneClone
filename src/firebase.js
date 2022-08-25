
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWKRvnZypgD_SJw1K1XVz261fhRY_WxIw",
  authDomain: "clone-cc967.firebaseapp.com",
  projectId: "clone-cc967",
  storageBucket: "clone-cc967.appspot.com",
  messagingSenderId: "759907107861",
  appId: "1:759907107861:web:c40629e022ebb5f5ea3a1c",
  measurementId: "G-1MFJ203RF8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

