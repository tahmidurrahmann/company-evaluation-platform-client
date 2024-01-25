import { useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';
import { app } from "../firebase/firebase";
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser.email)
            setUser(currentUser)
            const userEmail = user?.email || user?.email;
            const loggedUser = { email: userEmail }
            axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    // TODO : Navigate
                })

            setUser(currentUser)
            console.log(currentUser, "currentUser");
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }

    }, [user])


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