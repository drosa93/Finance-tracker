// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7UwKsa35sKRbGkZ3IKyj89HsdXU8oIDc",
  authDomain: "finance-tracker-d494f.firebaseapp.com",
  projectId: "finance-tracker-d494f",
  storageBucket: "finance-tracker-d494f.firebasestorage.app",
  messagingSenderId: "653767700720",
  appId: "1:653767700720:web:28be9953ced8570208d235",
  measurementId: "G-T4NNN1BNNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};