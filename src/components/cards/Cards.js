import React, { useContext, useState, createContext } from 'react'
import { Container, Group, SubTitle, Text, Title, Feature, FeatureTitle, FeatureText,Entities, FeatureClose, Meta, Maturity, Content, Item, Image } from "./styles/CardStyle"

export const FeatureContext = createContext();


export default function Cards({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})
    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
    )
}

Cards.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps} > {children}</Group>
}

Cards.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps} > {children}</Title>
}

Cards.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps} > {children}</SubTitle>
}

Cards.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps} > {children}</Text>
}
Cards.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps} > {children}</Meta>
}

Cards.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps} > {children}</Entities>
}
Cards.Item = function CardItem({ children, item, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return <Item
        onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
        }} {...restProps} > {children}</Item>
}

Cards.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}
Cards.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  
    return showFeature ? (
      <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>
  
          <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
            <FeatureText fontWeight="bold">
              {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
            </FeatureText>
          </Group>
  
          {children}
        </Content>
      </Feature>
    ) : null;
  };


