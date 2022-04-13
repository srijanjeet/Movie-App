// import Firebase from "firebase/app"
// import 'firebase/firestore'
// import 'firebase/auth'
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from "../seed";

const config = {

    apiKey: "AIzaSyDXHmteoBrm6bfdFVxcHLC6S7BbAOO_z84",
    authDomain: "netflix-clone-dde55.firebaseapp.com",
    projectId: "netflix-clone-dde55",
    storageBucket: "netflix-clone-dde55.appspot.com",
    messagingSenderId: "969081869140",
    appId: "1:969081869140:web:e076e21891138b6d426ec1"
};
const firebase = Firebase.initializeApp(config);


// once the data is seeded in database i comment it out bcoz if i again run it their will be duplicate entries in my database 
// seedDatabase(firebase);


export { firebase };