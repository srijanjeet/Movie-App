import React from 'react'
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Faqs from './containers/faqs'
import FooterContainer from './containers/footerContainer'
import { JumbotronContainer } from './containers/jumbotron'
import * as ROUTES from './constants/routes'
import HeaderContainer from './containers/headerContainer';
import Opt from './components/opt-form/opt';
import Feature from './components/feature/Feature';
import SignInContainer from './containers/SignInContainer';
import SignupContainer from './containers/SignupContainer';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import useAuthListener from './hooks/use-auth-listener';
import Browse from './pages/browse';


export default function App() {
  const user = useAuthListener();
  console.log(user);
  return (
    <>
      <BrowserRouter>
        {/* <Switch> */}
        <Route exact path={ROUTES.Home}>
          <>
            <HeaderContainer>
              <Feature>
                <Feature.Title>
                  Unlimited films, TV programmes and more
                </Feature.Title>
                <Feature.SubTitle>
                  Watch anywhere, Cancel it any time
                </Feature.SubTitle>
                <Feature.SubTitle>
                  Ready to watch? Enter your email to create or restart your membership.
                </Feature.SubTitle>

                <Opt>
                  <Opt.Input placeholder="Email address" />
                  <Opt.Button>Try it now</Opt.Button>
                </Opt>
                <Opt.Text>
                  Ready to watch? Enter you email to create or restart your membership
                </Opt.Text>
              </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <Faqs />
            <FooterContainer />
          </>

        </Route>




        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
          <HeaderContainer>
            <SignInContainer />
          </HeaderContainer>
          <FooterContainer>

          </FooterContainer>
        </IsUserRedirect>




        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
          <>
            <HeaderContainer>
              <SignupContainer />
            </HeaderContainer>
            <FooterContainer>

            </FooterContainer>
          </>

        </IsUserRedirect>






        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>

          <Browse />
        </ProtectedRoute>


        {/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.Home}>
          <HeaderContainer>
            <SignupContainer />
          </HeaderContainer>
          <FooterContainer>

          </FooterContainer>
        </IsUserRedirect> */}

      </BrowserRouter>

    </>
  )
}
