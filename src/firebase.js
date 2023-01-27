
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB1uuc4jn-MQzke3SqqjbpT0oNDow2xgIU",
  authDomain: "kredos-academy.firebaseapp.com",
  projectId: "kredos-academy",
  storageBucket: "kredos-academy.appspot.com",
  messagingSenderId: "21724336902",
  appId: "1:21724336902:web:969a9bd891bf126d3b4487",
  measurementId: "G-80VWNLCYQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)