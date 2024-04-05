// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDininA4aTJOt6XwunRlnchVanpWBrKIjw",
  authDomain: "av-native.firebaseapp.com",
  projectId: "av-native",
  storageBucket: "av-native.appspot.com",
  messagingSenderId: "462419763111",
  appId: "1:462419763111:web:89514c7422708d80ad2082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore(app)
export default auth