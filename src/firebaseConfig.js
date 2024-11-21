// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import Authentication
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Storage

// Firebase configuration object (replace with your own config details)
const firebaseConfig = {
  apiKey: "AIzaSyBht85PRDzgqPteX3H5V4ncirIHbXpC2fw",
  authDomain: "gorge-f34e3.firebaseapp.com",
  projectId: "gorge-f34e3",
  storageBucket: "gorge-f34e3.appspot.com",
  messagingSenderId: "477780899267",
  appId: "1:477780899267:web:79cf0c572e64dae97a7976",
  measurementId: "G-LNXKZKVVFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);       // Authentication instance
const db = getFirestore(app);    // Firestore instance
const storage = getStorage(app); // Storage instance

export { auth, db, storage };  // Export the instances for use in your components
