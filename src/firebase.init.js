// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uLSrTegqokVlOGQSU8YraoCkeQDeqsI",
  authDomain: "shohidul-jaman-anik-98faf.firebaseapp.com",
  projectId: "shohidul-jaman-anik-98faf",
  storageBucket: "shohidul-jaman-anik-98faf.appspot.com",
  messagingSenderId: "299853621636",
  appId: "1:299853621636:web:5d30610a9680331cb5d5d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
