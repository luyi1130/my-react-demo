// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8s_drfZko9NGyWqWuvBE7fZrz0HkvAEc",
  authDomain: "my-react-ba975.firebaseapp.com",
  projectId: "my-react-ba975",
  storageBucket: "my-react-ba975.firebasestorage.app",
  messagingSenderId: "916743898673",
  appId: "1:916743898673:web:7c28076ffc1730f6c93710",
//   measurementId: "G-4ZMRDJDRPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider