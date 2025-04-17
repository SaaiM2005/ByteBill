// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDILvddVREkFCCIEaTOrLsT27aJj7ssxzM',
  authDomain: 'bytebill-2793b.firebaseapp.com',
  projectId: 'bytebill-2793b',
  storageBucket: 'bytebill-2793b.firebasestorage.app',
  messagingSenderId: '763088042103',
  appId: '1:763088042103:web:d2cb6714c24d450d76ae72',
  databaseURL: 'https://bytebill-2793b-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);

export { app };
