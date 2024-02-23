import React, { createContext, useEffect, useState, ReactNode } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, Auth, User, UserCredential } from "firebase/auth";
import { app } from "../firebase/firebase";

export const AuthContext = createContext<AuthInfo | null>(null);
const googleProvider = new GoogleAuthProvider();

const auth: Auth = getAuth(app);

interface AuthInfo {
    user: User | null;
    createUser: (email: string, password: string) => Promise<UserCredential>; // Change return type
    loading: boolean;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
    googleSignIn: () => Promise<UserCredential>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo: AuthInfo = {
        user,
        createUser,
        loading,
        signIn,
        logOut,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;