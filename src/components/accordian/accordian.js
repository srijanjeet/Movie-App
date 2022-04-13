import React, { createContext, useContext, useState } from 'react'
import { Container, Frame, Title, Item, Inner, Header, Body, HideBody } from './styles/accordianStyle';
// import add from '/public/images/icons/add.png'

const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
    return (
        <>
            <Container {...restProps}>
                <Inner>
                    {children}
                </Inner>
            </Container>
        </>
    )
};

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children} </Title>

};

Accordian.Item = function AccordianItem({ children, sri, ...restProps }) {
    // const [toggleShow, setToggleShow] = useState(false)
    const [toggleShow, setToggleShow] = useState(null)

    return <ToggleContext.Provider value={{ toggleShow, setToggleShow, sri }}>
      <Item {...restProps}>{children} </Item>
    </ToggleContext.Provider>
    
};

Accordian.Frame = function AccordianFrame({ children, ...restProps }) {

    return <Frame {...restProps}>{children} </Frame>
};

Accordian.Header = function AccordianHeader({ children, ...restProps}, props) {
    const {toggleShow, setToggleShow, sri} = useContext(ToggleContext);

    // return <Header onClick = {() => {
    //     setToggleShow((toggleShow) => !toggleShow) 
    // }} {...restProps}>{children}
    // {toggleShow ? (<img src= '/images/icons/close-slim.png' alt = "Close"/>): (<img src='/images/icons/add.png' alt = "Open"/>)}

    const jeet = (sri) =>
    {
    
        if (toggleShow === sri) {
            setToggleShow(null);
       }
       else
       {
        // console.log("in else loop");
           setToggleShow(sri);
       }
       
       
    }
  
    return <Header onClick = {() => jeet(sri)} {...restProps}>{children}
        {/* {console.log(props.i)} */}
        {(toggleShow === sri) ? ( <img src= '/images/icons/close-slim.png' alt = "Close"/>): (<img src='/images/icons/add.png' alt = "Open"/>)}
     </Header>
};



Accordian.Body = function AccordianBody ({children ,  ...restProps})
{
    const {toggleShow, sri} = useContext(ToggleContext);
    return (toggleShow === sri ?  <Body {...restProps}> {children} </Body> : <HideBody {...restProps}> {children} </HideBody> );
    // return   <HideBody {...restProps}> {children} </HideBody> ;
}