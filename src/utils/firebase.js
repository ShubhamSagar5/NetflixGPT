// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBGAhKkmpeZlBxEVIrVFC1xNzY4Fdzdh1Q",
//   authDomain: "netflixgpt-544d8.firebaseapp.com",
//   projectId: "netflixgpt-544d8",
//   storageBucket: "netflixgpt-544d8.appspot.com",
//   messagingSenderId: "47443846026",
//   appId: "1:47443846026:web:1f284b5f6bdefda8009e73",
//   measurementId: "G-90LWG1W9BN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxCmBdW_MSEb5Lwket6OgX_GPhBljwSLA",
  authDomain: "netflixgpt2-3364e.firebaseapp.com",
  projectId: "netflixgpt2-3364e",
  storageBucket: "netflixgpt2-3364e.appspot.com",
  messagingSenderId: "15333938801",
  appId: "1:15333938801:web:7f8831c4d5251d6d6f2dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();