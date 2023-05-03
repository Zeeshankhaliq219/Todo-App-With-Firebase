// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzOTNJARZnpRzJzqw_cRbQsOji0ztEmI0",
  authDomain: "todo-app-219.firebaseapp.com",
  projectId: "todo-app-219",
  storageBucket: "todo-app-219.appspot.com",
  messagingSenderId: "504170684857",
  appId: "1:504170684857:web:1fc58292e364ba0e509668",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



