import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBI7-RAbkIoQkv7KO4iGpIgsOfSX3_Kpec",
    authDomain: "to-do-app-81467.firebaseapp.com",
    projectId: "to-do-app-81467",
    storageBucket: "to-do-app-81467.appspot.com",
    messagingSenderId: "723917995879",
    appId: "1:723917995879:web:c4b3242a53860c106379c2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };