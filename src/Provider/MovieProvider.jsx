import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase_init";

export const MovieContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const MovieProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // registation
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }

     // updateprofile
     const UserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

     // google provider
     const logInbyGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const movieInfo = {
        user,
        setUser,
        createUser,
        userLogin,
        userLogout,
        UserProfile,
        logInbyGoogle,
        loading
    }
    return (
        <MovieContext.Provider value={movieInfo}> 
            {children} 
        </MovieContext.Provider>
    );
};

export default MovieProvider;
