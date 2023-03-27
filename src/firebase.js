import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC9PSzmTD18R8wFnsfkfk_JVElVmEstoF8",
  authDomain: "shopazon-1a591.firebaseapp.com",
  projectId: "shopazon-1a591",
  storageBucket: "shopazon-1a591.appspot.com",
  messagingSenderId: "262648308319",
  appId: "1:262648308319:web:3570245aa4b1de90cbf1ea"
};

const firebaseApp =  initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };