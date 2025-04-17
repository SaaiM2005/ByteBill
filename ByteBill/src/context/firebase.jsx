// src/firebase.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDILvddVREkFCCIEaTOrLsT27aJj7ssxzM',
  authDomain: 'bytebill-2793b.firebaseapp.com',
  projectId: 'bytebill-2793b',
  storageBucket: 'bytebill-2793b.firebasestorage.app',
  messagingSenderId: '763088042103',
  appId: '1:763088042103:web:d2cb6714c24d450d76ae72',
  databaseURL: 'https://bytebill-2793b-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Renamed from `app` to `firebaseApp`
const auth = getAuth(firebaseApp);

// Create Context
const FirebaseContext = createContext();

// Firebase Provider
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        user,
        loading,
        signIn,
        signUp,
        logout,
        signInWithGoogle,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook for consuming the context
export const useFirebase = () => useContext(FirebaseContext);

// Export firebaseApp and raw auth if needed elsewhere
export { firebaseApp, auth };
export default FirebaseContext;
