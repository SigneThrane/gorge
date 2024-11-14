// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBht85PRDzgqPteX3H5V4ncirIHbXpC2fw",
  authDomain: "gorge-f34e3.firebaseapp.com",
  projectId: "gorge-f34e3",
  storageBucket: "gorge-f34e3.firebasestorage.app",
  messagingSenderId: "477780899267",
  appId: "1:477780899267:web:79cf0c572e64dae97a7976",
  measurementId: "G-LNXKZKVVFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);