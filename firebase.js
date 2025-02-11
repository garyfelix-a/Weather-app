// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF3VXo26FvR57fA-Mg5ciq5l9X49J95HY",
  authDomain: "weather-app-af5a9.firebaseapp.com",
  projectId: "weather-app-af5a9",
  storageBucket: "weather-app-af5a9.firebasestorage.app",
  messagingSenderId: "116666072280",
  appId: "1:116666072280:web:239cf0ce52227fd160ebad",
  measurementId: "G-34XHV6ELQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);