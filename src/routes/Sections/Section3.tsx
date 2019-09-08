import React, { useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { animated as a, useChain, useSpring, config } from 'react-spring'
import { intersectOptions } from '.'
import {easeBackIn, easeSinInOut} from 'd3-ease'

import * as img from '../../assets'


const Section3: React.FC = () => {
  const [ref, inView] = useInView(intersectOptions)

  const betaText = `[BETA!][BETA!][BETA!][BETA!][BETA!][BETA!][BETA!][BETA!][BETA!][BETA!]`

  const imageWrapperRef: any = useRef()
  const imageWrapperProps = useSpring({
    from: { transform: 'translateX(50%)' },
    to: { transform: 'translateX(-50%)' },
    ref: imageWrapperRef,
    config: {
      duration: 2000,
      easing: easeSinInOut
    }
  })

  const backgroundTextRTLRef: any = useRef()
  const backgroundTextRTLProps = useSpring({
    from: { transform: 'translateX(-2%)' },
    to: { transform: 'translateX(-15%)' },
    ref: backgroundTextRTLRef,
    config: {
      duration: 2000,
      easing: easeBackIn
    }
  })

  const backgroundTextLTRRef: any = useRef()
  const backgroundTextLTRProps = useSpring({
    from: { transform: 'translateX(-20%)' },
    to: { transform: 'translateX(-12%)' },
    ref: backgroundTextLTRRef,
    config: {
      duration: 2000,
      easing: easeBackIn
    }
  })

  useChain(inView ? [imageWrapperRef, backgroundTextRTLRef, backgroundTextLTRRef, ] : [], [
    0.5,
    0.3,
    0.3
  ])

  return (
    <Wrapper ref={ref}>
      <BackgroundTextSection>
        <BackgroundText style={backgroundTextRTLProps}>{betaText}</BackgroundText>
        <BackgroundText style={backgroundTextLTRProps}>{betaText}</BackgroundText>
        <BackgroundText style={backgroundTextRTLProps}>{betaText}</BackgroundText>
        <BackgroundText style={backgroundTextLTRProps}>{betaText}</BackgroundText>
        <BackgroundText style={backgroundTextRTLProps}>{betaText}</BackgroundText>
      </BackgroundTextSection>
      <ImageSection style={imageWrapperProps}>
        <Image src={img.discoball} />
        <Image src={img.dj} />
        <Image src={img.dock} />
        <Image src={img.gameboy} />
        <Image src={img.instruments} />
      </ImageSection>
    </Wrapper>
  )
}

const Wrapper = styled(a.section)`
  display: flex;
  padding: 0;
  background-color: #16a085;
  height: 100vh;
  z-index: 1;
`

const ImageSection = styled(a.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  z-index: 3;
`

const Image = styled(a.img)`
  height: 20vw;
  width: auto;
  padding: 10px
`

const BackgroundTextSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  background: transparent;
  height: 100vh;
  z-index: 2;
  overflow: hidden;
`

const BackgroundText = styled(a.p)`
  margin: 0;
  font-size: 10vw;
  font-weight: bolder;
  opacity: 0.1;
  white-space: nowrap;
`

export default Section3
