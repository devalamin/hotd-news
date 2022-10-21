// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHFiCKMBlrbNdnzmUjkpJeWLtGt-mR6lc",
    authDomain: "hotd-news.firebaseapp.com",
    projectId: "hotd-news",
    storageBucket: "hotd-news.appspot.com",
    messagingSenderId: "9995783223",
    appId: "1:9995783223:web:9fcbf15c2ea92caad703b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;