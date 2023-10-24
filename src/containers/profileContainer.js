import React from 'react'
import Header from '../components/Header/Header'
import  Profiles  from '../components/profiles/profile'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({user, setProfile}) {
  return(
      <>
      <Header bg = {false}>
        <Header.Frame>
            {/* <Header.Logo to={ROUTES.Home} src = {logo} alt = "Nueflix"/> */}
            <h1>Nueflix</h1>
        </Header.Frame>
      </Header>

      <Profiles>
          <Profiles.Title>Who's Watching</Profiles.Title>
          <Profiles.List>
              <Profiles.User onClick = {()=> setProfile({displayName: user.displayName, photoURL :user.photoURL})}>
                  <Profiles.Picture src = {user.photoURL}/>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                  
              </Profiles.User>
          </Profiles.List>
      </Profiles>
      </>
  )
}
