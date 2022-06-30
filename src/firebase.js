// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKYIC-kuvWKsGrXyvHCRs4eUQiLTIM1zc",
  authDomain: "chatapp-42ff5.firebaseapp.com",
  projectId: "chatapp-42ff5",
  storageBucket: "chatapp-42ff5.appspot.com",
  messagingSenderId: "696985022798",
  appId: "1:696985022798:web:b9f40507f55a6117ca2e1f",
  measurementId: "G-96YJFHNLWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);