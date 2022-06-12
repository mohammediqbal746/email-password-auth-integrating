// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFqqhHpmVYMlin6kZ5ewWOMkamtXEEH2U",
    authDomain: "router-firebase-integrating.firebaseapp.com",
    projectId: "router-firebase-integrating",
    storageBucket: "router-firebase-integrating.appspot.com",
    messagingSenderId: "756987353438",
    appId: "1:756987353438:web:1965b05c5f3116c23317cf",
    measurementId: "G-1Q5C1E5J3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 