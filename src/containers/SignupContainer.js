import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SignIn from '../components/Form/SignIn'
import { FirebaseContext } from '../context/firebaseContext'
import * as ROUTES from '../constants/routes'

export default function SignupContainer() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = () => {
        if (password === "" || email === "" || firstName === "") {
            return true;
        }
        else {
            return false;
        }
    }

    const handleSignup = (event) => {
        event.preventDefault();

        //firebase working
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result)=> {
            result.user
            .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() *5 )+1,
            }).then(()=>{
                history.push(ROUTES.BROWSE);
            })
        }).catch((error) => {
            setEmail('')
            setFirstName('')
            setPassword('')
            setError(error.message)
        })
    }
    return (
        <>
            <SignIn>
                <SignIn.Title>
                    Sign Up
                </SignIn.Title>
                {error && <SignIn.Error>{error}</SignIn.Error>}
                <SignIn.Base onSubmit={handleSignup} method="POST" >
                    <SignIn.Input placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    <SignIn.Input placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <SignIn.Input placeholder=" Password" value={password} type="password" onChange={(event) => setPassword(event.target.value)} />
                    <SignIn.Submit disabled={isInvalid() ? true : false} type='submit' >
                        Sign Up
                    </SignIn.Submit>
                    <SignIn.Text>
                        Already a User? <SignIn.Link to={ROUTES.SIGN_IN}>Sign in now.</SignIn.Link>
                    </SignIn.Text>
                    <SignIn.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot
                    </SignIn.TextSmall>
                </SignIn.Base>

            </SignIn>
        </>
    )
}
