// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGAhKkmpeZlBxEVIrVFC1xNzY4Fdzdh1Q",
  authDomain: "netflixgpt-544d8.firebaseapp.com",
  projectId: "netflixgpt-544d8",
  storageBucket: "netflixgpt-544d8.appspot.com",
  messagingSenderId: "47443846026",
  appId: "1:47443846026:web:1f284b5f6bdefda8009e73",
  measurementId: "G-90LWG1W9BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
