import React from 'react'
import {Container, Error, Title,Base, Text, TextSmall,Link, Input,Submit} from './style/SignStyle'

export default function SignIn({children, ...restProps}) {
  return (
      <>
      <Container {...restProps} >{children}</Container>
      </>
  )
}

SignIn.Error = function SignInError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
}

SignIn.Base = function SignInBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
}

SignIn.Title = function SignInTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

SignIn.Text = function SignInText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

SignIn.TextSmall = function SignInTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}
SignIn.Link = function SignInLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}
SignIn.Submit = function SignInSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

SignIn.Input = function SignInInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

