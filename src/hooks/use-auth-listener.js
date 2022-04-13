import { useState, useEffect, useContext } from 'react'
// import firebase from 'firebase'
import * as firebase from 'firebase/app'
import "firebase/auth";

import { FirebaseContext } from '../context/firebaseContext'
// require('firebase/auth')

//this function is called if the user closes the tab and then rejoin he should not be logged out so first we'll just get the credential from the local storage
export default function UserAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser'))); //this will store the credential of the user
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
                if (authUser) {
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                    setUser(authUser)
                }
                else {
                    localStorage.removeItem('authUser');
                    setUser(null);
                }
            })
        return () => listener(); //this clean the listener and we do not see the error
    }, []);
    return { user };
}


// import { useState, useEffect, useContext } from 'react';
// import { FirebaseContext } from '../context/firebaseContext'

// export default function useAuthListener() {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
//   const { firebase } = useContext(FirebaseContext);

//   useEffect(() => {
//     const listener = firebase.auth().onAuthStateChanged((authUser) => {
//       if (authUser) {
//         localStorage.setItem('authUser', JSON.stringify(authUser));
//         setUser(authUser);
//       } else {
//         localStorage.removeItem('authUser');
//         setUser(null);
//       }
//     });

//     return () => listener();
//   }, []);

//   return { user };
// }
