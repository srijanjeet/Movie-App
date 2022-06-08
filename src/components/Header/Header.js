import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink, Profile,PlayButton, Feature, Group, Text, FeatureCallOut, Search, SearchIcon, Picture, Dropdown, Textlink, SearchInput } from "./styles/headerStyle"

export default function Header({ bg = true, children, ...restProps }) {
  return (
    <>
      {bg ? <Background {...restProps}>{children} </Background> : children}
    </>
  )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>
    {children}
  </Feature>
}
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>
    {children}
  </FeatureCallOut>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, children, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)
  return <Search {...restProps}>
    {children}
    <SearchIcon onClick={() => {
      setSearchActive(searchActive => !searchActive)
    }}>
      <img src="/images/icons/search.png" alt="Search" />
    </SearchIcon>
    <SearchInput
      value={searchTerm} onChange={({target}) => {
        setSearchTerm(target.value)
      }}
      placeholder="Search films and series"
      active={searchActive}
    />

  </Search>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>
    {children}
  </Text>
}
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Textlink {...restProps}>
    {children}
  </Textlink>
}
Header.Picture = function HeaderPicture({ src, children, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps}>
    {children}
  </Picture>
}
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>
    {children}
  </Profile>
}
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>
    {children}
  </PlayButton>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>
    {children}
  </Dropdown>
}


Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <>
      <Link to={to} >
        <Logo {...restProps} />
      </Link>
    </>
  )
}

