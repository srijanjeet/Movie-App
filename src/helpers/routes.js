import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'


// the below function helps us to track where the user at 
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route {...rest}
            render={() => {
                if (user.user === null) {
                    // this condition runs if the user is not present in the database and then we return the children
                    console.log("user not found")
                    return children;
                }

                if (user.user) {
                    // this runs if the user is present
                    return (
                        <Redirect to={{ pathname: loggedInPath, }} />
                    )
                }
                return null;
            }} />

    )


}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route {...rest}
            render={({ location }) => {
                if (user.user) {
                    return children;
                }
                if (user.user === null) {
                    return (
                        <>
                            <Redirect to={{
                                pathname: 'signin',
                                state: { from: location },
                            }} />
                            {console.log('jeet')}
                        </>


                    )
                }
                return null
            }} />
    )
}



