// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuWv7FxTuxr3H2n0B97OoaeGnJ1gQ8cIE",
  authDomain: "mercury-7f502.firebaseapp.com",
  projectId: "mercury-7f502",
  storageBucket: "mercury-7f502.firebasestorage.app",
  messagingSenderId: "511837046213",
  appId: "1:511837046213:web:df8b21619edb5d3b8ff7ac",
  measurementId: "G-2R4K74Y6RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db, analytics };
