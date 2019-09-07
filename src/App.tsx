import React, {useEffect, useState, lazy, Suspense} from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import Sections from './routes/Sections';
import './App.css';

import * as images from './assets'

const imageList = Object.values(images)

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const [count, incrementCount] = useState(0)

  useEffect(() => {
    if (count === imageList.length) {
      setLoaded(true)
    }
  }, [count])

  const renderImages = () =>
    imageList.map(src => (
      <img
        key={src}
        src={src}
        alt="img preload"
        onLoad={() => incrementCount(count + 1)}
      />
    ))

  return (
    <Main>
      <Suspense fallback={<LoaderWrapper />}>
        {loaded ? (
          <>
            <Switch>
              <Route exact path="/" component={Sections}></Route>
            </Switch>
          </>
        ) : (
          <LoaderWrapper>
            <h1>Loading your magazines...</h1>
              <ImageLoader>{renderImages()}</ImageLoader>
          </LoaderWrapper>
        )}
      </Suspense>
    </Main>
  );
}

const ImageLoader = styled.div`
  visibility: hidden;
  height: 0;
  width: 0;
  font-size: 0;
`

const LoaderWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export default App;
