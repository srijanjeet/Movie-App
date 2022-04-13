import React, {useContext, useState} from 'react'
import  {useHistory} from 'react-router-dom'
import SignIn from '../components/Form/SignIn'
import { FirebaseContext } from '../context/firebaseContext'
import * as ROUTES from '../constants/routes'

export default function SignInContainer() {
    const history = useHistory();// helps us to redirect to two or more routes
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = () =>{
        if (password === ""|| email === "") {
            return true;
        }
        else
        {
            return false;
        }
    }
    

    const handleSignin = (event) =>{
        event.preventDefault();

        //firebase will work here
        firebase
        .auth()
        .signInWithEmailAndPassword(email , password)
        .then(()=>{
            //push to browse page or landing page
           history.push(ROUTES.BROWSE);
        })
        .catch((error)=>{
            setEmail("");
            setPassword("")
            setError(error.message);
        })

    }
  return (
    <>
        <SignIn>
            <SignIn.Title>
                Sign In
            </SignIn.Title>
            {error && <SignIn.Error>{error}</SignIn.Error>}
            <SignIn.Base onSubmit= {handleSignin} method ="POST" >
                <SignIn.Input placeholder = "Email Address" value= {email} onChange = {(event)=> setEmail(event.target.value)} />

                <SignIn.Input placeholder = " Password" value= {password} type="password"  onChange = {(event)=> setPassword(event.target.value)} />
                 <SignIn.Submit disabled = {isInvalid() ? true : false} type= 'submit' >
                        Sign In
                 </SignIn.Submit>
             </SignIn.Base>

             <SignIn.Text>
                 New to Netflix? <SignIn.Link to = {ROUTES.SIGN_UP} > Sign up Now. </SignIn.Link>
             </SignIn.Text>
             <SignIn.TextSmall>
             This page is protected by Google reCAPTCHA to ensure you're not a bot
             </SignIn.TextSmall>
        </SignIn>
    </>
  )
}
