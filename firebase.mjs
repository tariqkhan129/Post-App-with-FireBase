// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw8xFshnxBUaIqLAvXKrGJ-hbiflcgRgs",
  authDomain: "post-app-f7852.firebaseapp.com",
  projectId: "post-app-f7852",
  storageBucket: "post-app-f7852.appspot.com",
  messagingSenderId: "669222855025",
  appId: "1:669222855025:web:187ad226b3466ec9a856d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);