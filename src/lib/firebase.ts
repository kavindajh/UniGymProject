// Import the functions 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products 
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgYCYqBWKLXv9xt8PWLFu5_3CCETd4aA",
  authDomain: "unigymproject.firebaseapp.com",
  projectId: "unigymproject",
  storageBucket: "unigymproject.firebasestorage.app",
  messagingSenderId: "521005570774",
  appId: "1:521005570774:web:9d0a89ff902a2f3a8dc777",
  measurementId: "G-62SFSJ3Q73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };