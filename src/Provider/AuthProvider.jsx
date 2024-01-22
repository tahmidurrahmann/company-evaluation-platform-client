import { useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)

    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)

    }

    const logOut = ()=>{
        return signOut(auth)
    }
    const googleSignIn= ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
       }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser)
             console.log(currentUser, "currentUser");
             setLoading(false)
         })
         return ()=>{
             unSubscribe()
         }
     },[])

     const authInfo = {
        user,
        createUser,
        loading,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;