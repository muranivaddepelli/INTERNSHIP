// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw6aPOzb1pM8qBf1IXsF4V2raPV-MD2Hc",
  authDomain: "login-1e9ca.firebaseapp.com",
  projectId: "login-1e9ca",
  storageBucket: "login-1e9ca.firebasestorage.app",
  messagingSenderId: "52154796747",
  appId: "1:52154796747:web:c58e275ca69cd0982be94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app,firebaseConfig}