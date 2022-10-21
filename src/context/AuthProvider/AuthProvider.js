import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const mobile = { display: '120' };
    const [newUser, setNewUser] = useState();
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    const providerLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setNewUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    console.log(newUser);

    const authInfo = { newUser, loading, updateUserProfile, logOut, providerLogIn, createUser, userLogIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;