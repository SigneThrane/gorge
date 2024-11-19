// firebase/init.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Import getStorage for Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBht85PRDzgqPteX3H5V4ncirIHbXpC2fw",
  authDomain: "gorge-f34e3.firebaseapp.com",
  projectId: "gorge-f34e3",
  storageBucket: "gorge-f34e3.appspot.com", // Corrected the storageBucket URL here
  messagingSenderId: "477780899267",
  appId: "1:477780899267:web:79cf0c572e64dae97a7976",
  measurementId: "G-LNXKZKVVFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage(app);

export { db, auth, storage }; // Export Firestore, Authentication, and Storage instances for use in your Vue components
