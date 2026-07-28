import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const UserContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const singup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin =  (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const signout = () => { 
        return signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    const authData = {
        user,
        setUser,
        singup,
        signin,
        signout
    }
    return <UserContext value={authData}>{children}</UserContext>
}

export default AuthProvider;