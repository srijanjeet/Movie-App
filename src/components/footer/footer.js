import React from 'react'
import {Container, Row ,Column ,Link , Title, Text, Break} from './style/footerStyle'

export default function footer({ children, ...restProps }) {
    return (
        <>
        <Container {...restProps}>
            {children}
        </Container>
        </>
    )
}

footer.Row = function footerRow({children , ...restProps}) {
    return <Row {...restProps}>
        {children}
    </Row>
}

footer.Column = function footerColumn({children , ...restProps}) {
    return <Column {...restProps}>
        {children}
    </Column>
}
footer.Link = function footerLink({children , ...restProps}) {
    return <Link {...restProps}>
        {children}
    </Link>
}
footer.Title = function footerTitle({children , ...restProps}) {
    return <Title {...restProps}>
        {children}
    </Title>
}
footer.Text = function footerText({children , ...restProps}) {
    return <Text {...restProps}>
        {children}
    </Text>
}
footer.Break = function footerBreak({children , ...restProps}) {
    return <Break {...restProps}>
        {children}
    </Break>
}
