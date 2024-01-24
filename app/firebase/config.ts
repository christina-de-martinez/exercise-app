// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeea6UWZqcwCwUwWKvHKhjeoT_qNxjEAU",
  authDomain: "workout-planner-8b89e.firebaseapp.com",
  projectId: "workout-planner-8b89e",
  storageBucket: "workout-planner-8b89e.appspot.com",
  messagingSenderId: "119450941074",
  appId: "1:119450941074:web:b90b4e31c3038c8b23d84b",
  measurementId: "G-FN3LKR8VR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
