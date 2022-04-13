import React from 'react'
import  {Container, Input, Text, Button} from './styles/optStyles'

export default function Opt({children, ...restProps}) {
  return (
    <>
        <Container {...restProps}>
            {children}
        </Container>
    </>
  )
}

Opt.Input = function OptInput({children , ...restProps})
{
    return <Input {...restProps}>
        {children}
    </Input>
}

Opt.Text = function OptText({children , ...restProps})
{
    return <Text {...restProps}>
        {children}
    </Text>
}

Opt.Button = function OptButton({children , ...restProps})
{
    return <Button {...restProps}>
        {children} <img src = '/images/icons/chevron-right.png' alt = "Try Now"/>
    </Button>
}