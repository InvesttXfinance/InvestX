// Import Firebase SDK (modular version)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your project details)
const firebaseConfig = {
    apiKey: "AIzaSyA1dXbjib550e-AUMgEseWoUq8loCxn7jM",
    authDomain: "investx-49ffd.firebaseapp.com",
    projectId: "investx-49ffd",
    storageBucket: "investx-49ffd.appspot.com",
    messagingSenderId: "589421389261",
    appId: "1:589421389261:web:your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };
