// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NSj1Xz9l212zI68M_knd_Vbn8UhIRNs",
  authDomain: "mnahealth-a7a69.firebaseapp.com",
  databaseURL: "https://mnahealth-a7a69-default-rtdb.firebaseio.com",
  projectId: "mnahealth-a7a69",
  storageBucket: "mnahealth-a7a69.appspot.com",
  messagingSenderId: "362906286893",
  appId: "1:362906286893:web:6d3d48231e85ed35f8b1a4",
  measurementId: "G-LLFVKG9CB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth();

// connect to database

export const db = getFirestore();

// Connect to UserCollection

export const userCollection = collection(db, "Users");

// connect to medicalCollection

export const medicalCollection = collection(db, "medical");

// connect to appointmentCollection

export const appointmentCollection = collection(db, "appointment");