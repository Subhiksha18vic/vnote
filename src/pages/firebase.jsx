import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQie0uotgxi35E9vHQTNyghqEcmBZ_dD4",
    authDomain: "vnote-3439e.firebaseapp.com",
    projectId: "vnote-3439e",
    storageBucket: "vnote-3439e.appspot.com",
    messagingSenderId: "676616790064",
    appId: "1:676616790064:web:91a9fee1cec5cbff3a4df5",
    measurementId: "G-1KWSFSZZ11"
  };

firebase.initializeApp(firebaseConfig);