// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjfJcUhpEI4fe18YtLNEVX6ObB1LbOiTU",
  authDomain: "netflixgpt-f336e.firebaseapp.com",
  projectId: "netflixgpt-f336e",
  storageBucket: "netflixgpt-f336e.firebasestorage.app",
  messagingSenderId: "719195136939",
  appId: "1:719195136939:web:b9f00fcda5bb6f689de8ee",
  measurementId: "G-MGWJR6L8Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
