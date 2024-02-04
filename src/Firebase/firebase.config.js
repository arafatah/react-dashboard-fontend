// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVJABm4_uRBl-gJnno0oOHwqd-N75foY4",
  authDomain: "alpaago-a7694.firebaseapp.com",
  projectId: "alpaago-a7694",
  storageBucket: "alpaago-a7694.appspot.com",
  messagingSenderId: "348589974145",
  appId: "1:348589974145:web:3f51bd580e641c4af56380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;