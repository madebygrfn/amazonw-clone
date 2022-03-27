import { initializeApp, firebase } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCDeZu8JVyLcdUYf03IQNbcupgGc0PC6sg",
    authDomain: "clone-84c20.firebaseapp.com",
    projectId: "clone-84c20",
    storageBucket: "clone-84c20.appspot.com",
    messagingSenderId: "548900920926",
    appId: "1:548900920926:web:6538408044db784f2d9ecf",
    measurementId: "G-K37TTL13DH"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth();

  export { db, auth }