// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_2EykIYdaB4oD8sqaplSIPHWXCcVhArQ",
  authDomain: "quesdb-ebe7c.firebaseapp.com",
  projectId: "quesdb-ebe7c",
  storageBucket: "quesdb-ebe7c.appspot.com",
  messagingSenderId: "513669435006",
  appId: "1:513669435006:web:9c2f7a075f182e6025922f",
  measurementId: "G-YZWN2WDC8Z"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app;