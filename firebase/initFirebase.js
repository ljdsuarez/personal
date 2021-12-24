// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSdxh-u5Rk6E2me8i0umQzRXoxCI_hxfk",
  authDomain: "lureens-87c50.firebaseapp.com",
  projectId: "lureens-87c50",
  storageBucket: "lureens-87c50.appspot.com",
  messagingSenderId: "1013468909755",
  appId: "1:1013468909755:web:463e780de96e669ac5d99e",
  measurementId: "G-E76SFM0P7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
