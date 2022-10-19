// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NSj1Xz9l212zI68M_knd_Vbn8UhIRNs",
  authDomain: "mnahealth-a7a69.firebaseapp.com",
  projectId: "mnahealth-a7a69",
  storageBucket: "mnahealth-a7a69.appspot.com",
  messagingSenderId: "362906286893",
  appId: "1:362906286893:web:2036d7d86c3512ecf8b1a4",
  measurementId: "G-K9ML1JVJ7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);