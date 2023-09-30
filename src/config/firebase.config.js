// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1jERh4tZvEqodE55uhAJAINi9H5OxIj0",
  authDomain: "intrigation-652b2.firebaseapp.com",
  projectId: "intrigation-652b2",
  storageBucket: "intrigation-652b2.appspot.com",
  messagingSenderId: "1090469119025",
  appId: "1:1090469119025:web:15e198b72de2096e648110",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
