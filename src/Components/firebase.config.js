// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTq-WbdokTShTZKK5b0Wy-IcAF_RpfmI0",
  authDomain: "auth-travel-dae34.firebaseapp.com",
  projectId: "auth-travel-dae34",
  storageBucket: "auth-travel-dae34.appspot.com",
  messagingSenderId: "867502878945",
  appId: "1:867502878945:web:920c37a6c7f0c9b18f07a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
