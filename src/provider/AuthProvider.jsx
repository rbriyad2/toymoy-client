import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const provider = new GoogleAuthProvider();

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut =()=>{
        return signOut(auth)
    }
   
    useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser)
    setLoading(false)
   
    if(currentUser && currentUser.email){

        const loggedUser ={
            email: currentUser.email
          }

        fetch('https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/jwt', {
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(loggedUser)
          })
          .then(res => res.json())
          .then(data =>{
            console.log('jwt response',data);
            localStorage.setItem('toy-access-token', data.token)
          })
    }
    else{
        localStorage.removeItem('toy-access-token')
    }
}) 
return ()=>{
    return unsubscribe()
}
    },[])


    const authinfo={
        loading,
        user,
        setLoading,
        createUser,
        signIn,
        logOut,
        googleLogin
        
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;