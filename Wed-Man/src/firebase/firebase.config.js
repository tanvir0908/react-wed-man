import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfj60jUsUOLi6J67Is-zj0ZcD6ePeU2oU",
  authDomain: "react-wed-man.firebaseapp.com",
  projectId: "react-wed-man",
  storageBucket: "react-wed-man.appspot.com",
  messagingSenderId: "243926138042",
  appId: "1:243926138042:web:ba3e8c12b72dfc5e60d683",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);