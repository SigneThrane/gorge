import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBht85PRDzgqPteX3H5V4ncirIHbXpC2fw",
  authDomain: "gorge-f34e3.firebaseapp.com",
  projectId: "gorge-f34e3",
  storageBucket: "gorge-f34e3.appspot.com",
  messagingSenderId: "477780899267",
  appId: "1:477780899267:web:79cf0c572e64dae97a7976",
  measurementId: "G-LNXKZKVVFM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);     
const db = getFirestore(app);    
const storage = getStorage(app); 

export { auth, db, storage };  