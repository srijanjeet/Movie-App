import React, { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { SelectProfileContainer } from './profileContainer'
import { FirebaseContext } from '../context/firebaseContext'
import Loading from '../components/loading/loading'
import Header from '../components/Header/Header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import Cards from '../components/cards/Cards'
import Player from '../components/Player/Player'

export function BrowseContainer({ slides }) {
  // here slides comes down as a films or series 
  const [category, setCategory] = useState('series')

  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [slideRows, setSlideRows] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName] //this square brackets contain the dependencies that means if the variable inside this changes the page will re render
  );

  useEffect(() => {
    setSlideRows(slides[category])

  }, [slides, category])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']})
    const results = fuse.search(searchTerm).map(({item})=> item);
    if(slideRows.length>0 && searchTerm.length>3 && results.length>0){
      setSlideRows(results)
    }
    else{
      setSlideRows(slides[category]);
    }
  }, [searchTerm])
  
  const handleClick = () => {
    window.location.href = 'https://www3.zoechip.com/watch-movie/joker-9766.1608895';
  };

  return (
    <>

      {profile.displayName ? (
        <>
          {loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)}
          <Header src="joker1" >
            <Header.Frame>
              <Header.Group>
                {/* <Header.Logo to={ROUTES.Home} src={logo} alt="Netflix" /> */}
                <h1 style= {{color: 'red', fontSize: '3rem'}}>Nueflix</h1>

                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => {
                  setCategory('series')
                }}>
                  Series
                </Header.TextLink>
                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => {
                  setCategory('films')
                }}>
                  Films
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <Header.Profile>

                  <Header.Picture src={user.photoURL} />

                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>
                        {user.displayName}
                      </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => {
                        firebase.auth().signOut()
                      }}>Sign Out</Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>

              </Header.Group>
            </Header.Frame>


            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
              <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                futile attempt to feel like he's part of the world around him.
              </Header.Text>
              <Header.PlayButton onClick={handleClick} >  Play</Header.PlayButton>
           
            </Header.Feature>
          </Header>
          <Cards.Group>
            {slideRows.map((slideItems) => {
              return <Cards key={`${category}- ${slideItems.title.toLowerCase()}`}>

                <Cards.Title>{slideItems.title} </Cards.Title>
                <Cards.Entities>
                  {slideItems.data.map((item) => {

                    return <Cards.Item key={item.docId} item={item}>
                      <Cards.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                      <Cards.Meta>
                        <Cards.SubTitle>{item.title}</Cards.SubTitle>
                        <Cards.Text>{item.description} </Cards.Text>
                      </Cards.Meta>
                    </Cards.Item>
                  }
                  )}
                </Cards.Entities>
                <Cards.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video  src={category === 'series' ? '/Videos/Family Guy Theme Song [Orginal - HD].mp4' : '/Videos/THE SOCIAL NETWORK - Official Trailer [2010] (HD).mp4'} />
                  </Player>

                </Cards.Feature>
              </Cards>
            })}
          </Cards.Group>
        </>
      )
        :
        (<SelectProfileContainer user={user} setProfile={setProfile} />)
      }

    </>
  )
}
