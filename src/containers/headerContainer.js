import React from 'react'
import Header from '../components/Header/Header'
import * as ROUTES from '../constants/routes'
import logo from "../logo.svg"

export default function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          {/* <Header.Logo to = {ROUTES.Home} alt = "Nueflix" /> */}
          <h1 style= {{color: 'red', fontSize: '3rem'}}>Nueflix</h1>
          <Header.ButtonLink to = {ROUTES.SIGN_IN}> Sign In</Header.ButtonLink>
        </Header.Frame>
          {children}
      </Header>
    </>
  )
}
