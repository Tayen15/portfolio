import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAs2rgJeI7u9nk52Jo_qrI9Cnbo_UJRW0",
  authDomain: "portfolio-b06a1.firebaseapp.com",
  projectId: "portfolio-b06a1",
  storageBucket: "portfolio-b06a1.firebasestorage.app",
  messagingSenderId: "716004024546",
  appId: "1:716004024546:web:f9157ecff3684a4a86febb",
  measurementId: "G-Q0KXHLXPJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };