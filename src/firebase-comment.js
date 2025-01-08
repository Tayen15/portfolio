import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAs2rgJeI7u9nk52Jo_qrI9Cnbo_UJRW0",
    authDomain: "portfolio-b06a1.firebaseapp.com",
    projectId: "portfolio-b06a1",
    storageBucket: "portfolio-b06a1.firebasestorage.app",
    messagingSenderId: "716004024546",
    appId: "1:716004024546:web:f9157ecff3684a4a86febb",
    measurementId: "G-Q0KXHLXPJS"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };