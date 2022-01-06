// Firebase
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  collection,
  getFirestore,
  where,
  query,
} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHF86O1xeAnqyacA_W3Ur4oap2sH0AaNM",
  authDomain: "miaerolinea-23192.firebaseapp.com",
  projectId: "miaerolinea-23192",
  storageBucket: "miaerolinea-23192.appspot.com",
  messagingSenderId: "867614589633",
  appId: "1:867614589633:web:441843dd12c51a227f8a40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore
const db = getFirestore(app);
// Google Auth Provider
const googleAuthProvider = new GoogleAuthProvider();

export { doc, where, query, getDocs, collection, db, googleAuthProvider };
