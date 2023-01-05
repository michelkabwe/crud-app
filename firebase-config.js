// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDDZQm2rt4KFEL_rdUH5P4J7D3XCX9ERE",
  authDomain: "database-be5d3.firebaseapp.com",
  projectId: "database-be5d3",
  storageBucket: "database-be5d3.appspot.com",
  messagingSenderId: "213749878997",
  appId: "1:213749878997:web:6a964ff403a9c3fe06d25c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

