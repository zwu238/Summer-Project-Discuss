import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyBL-hvudY6PrOAqO9_7qAmogC6zPWJjtKE",
  authDomain: "discuss-final.firebaseapp.com",
  projectId: "discuss-final",
  storageBucket: "discuss-final.appspot.com",
  messagingSenderId: "912050943879",
  appId: "1:912050943879:web:c8d36475c4bf770d628522",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
