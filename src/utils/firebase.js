// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChhqW-E1BH2wiF1dUvwcfRXFsaGnayaIs",
  authDomain: "netflixgpt-9a6a1.firebaseapp.com",
  projectId: "netflixgpt-9a6a1",
  storageBucket: "netflixgpt-9a6a1.firebasestorage.app",
  messagingSenderId: "721648807184",
  appId: "1:721648807184:web:e3309e88c02064dd4bc995",
  measurementId: "G-2W6SPML85N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
