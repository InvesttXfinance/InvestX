// Import Firebase SDK (if using a module system)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration (replace with your Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyA1dXbjib550e-AUMgEseWoUq8loCxn7jM",
    authDomain: "investx-49ffd.firebaseapp.com",
    projectId: "investx-49ffd",
    storageBucket: "investx-49ffd.firebasestorage.app",
    messagingSenderId: "589421389261",
    appId: "589421389261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to store user suggestions in Firestore
async function submitSuggestion(topic) {
    try {
        const docRef = await addDoc(collection(db, "suggestions"), {
            topic: topic,
            timestamp: new Date()
        });
        console.log("Suggestion saved with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Example usage (you'll call this when user submits a form)
submitSuggestion("How to save tax in India?");
