import React, { createContext, useEffect, useState } from 'react'
import auth from '../config/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const authContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("objarbeuser ", currentUser);
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    }, [])


    const AuthInformation = { user, registerUser, loginUser, logOut }
    return (
        <authContext.Provider value={AuthInformation}>
            {children}
        </authContext.Provider>
    )
}

export default Provider