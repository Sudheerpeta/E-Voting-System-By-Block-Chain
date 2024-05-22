// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8f6_4hkOtgad6RtKn1wX-0EIb1ZG5x00",
    authDomain: "application-17d00.firebaseapp.com",
    projectId: "application-17d00",
    storageBucket: "application-17d00.appspot.com",
    messagingSenderId: "802722948999",
    appId: "1:802722948999:web:89cc75dce1a05645609522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);