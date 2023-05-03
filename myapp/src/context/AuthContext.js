import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";



export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  
  const [IsLogin , setIsLogin]= useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
        
      } else {
        setIsLogin(false)
        
      }
    });
  })


    const CreateUser = (email,pass) => {
       return createUserWithEmailAndPassword(auth , email ,pass)
  }
  
  const CreateExistingUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  


  return (
    <>
      <AuthContext.Provider value={{ CreateUser, CreateExistingUser, SignOut,  IsLogin }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

