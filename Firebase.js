
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyeqPXXAn779fflkOvcsmZH2wofObC7zI",
  authDomain: "surface-banco.firebaseapp.com",
  projectId: "surface-banco",
  storageBucket: "surface-banco.appspot.com",
  messagingSenderId: "752462504483",
  appId: "1:752462504483:web:afbafaa4d3fddbac034796"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;