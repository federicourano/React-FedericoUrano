import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5pq7JT3RsUtkfgmE36FJqJBjSV1HAsHY",
  authDomain: "backend-ecommerce-urano.firebaseapp.com",
  projectId: "backend-ecommerce-urano",
  storageBucket: "backend-ecommerce-urano.appspot.com",
  messagingSenderId: "781913863433",
  appId: "1:781913863433:web:cf6877fc61f55d41514fd8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)