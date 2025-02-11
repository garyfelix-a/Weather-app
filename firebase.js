// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const api = {
  key: import.meta.env.VITE_API_KEY_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appid: import.meta.env.APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
}

const firebaseConfig = {
  apiKey: api.key,
  authDomain: "weather-app-af5a9.firebaseapp.com",
  projectId: "weather-app-af5a9",
  storageBucket: "weather-app-af5a9.firebasestorage.app",
  messagingSenderId: api.messagingSenderId,
  appId: api.appid,
  measurementId: api.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);