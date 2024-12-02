// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflixgpt-e65c1.firebaseapp.com",
  projectId: "netflixgpt-e65c1",
  storageBucket: "netflixgpt-e65c1.appspot.com",
  messagingSenderId: "714629770051",
  appId: "1:714629770051:web:73a9e487cfc5eb6708ddf6",
  measurementId: "G-X1P8E56JKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
