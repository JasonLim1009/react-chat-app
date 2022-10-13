// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKrIbwWuwGcCycCG4mxv7txFOXVZdwSI",
  authDomain: "chat-app-d6701.firebaseapp.com",
  projectId: "chat-app-d6701",
  storageBucket: "chat-app-d6701.appspot.com",
  messagingSenderId: "915921465943",
  appId: "1:915921465943:web:4ff638c23490d6042e2912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
