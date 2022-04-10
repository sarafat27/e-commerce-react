// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXbw8gzuatvd6ki1OlTnmfbV2-g05VtgM",
    authDomain: "e-commerce-react-896c1.firebaseapp.com",
    projectId: "e-commerce-react-896c1",
    storageBucket: "e-commerce-react-896c1.appspot.com",
    messagingSenderId: "709579729347",
    appId: "1:709579729347:web:7023196adaf24f3165b576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;