import React, {useRef} from 'react'
import styled from 'styled-components'
import { animated as a, useChain, useSpring, useTransition, config } from 'react-spring'

import * as img from '../../assets';


const Section1: React.FC = () => {
  const wrapperRef: any = useRef()
  const wrapperProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: wrapperRef,
    config: { native: true }
  })

  const titleRef: any = useRef()
  const titleProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    ref: titleRef,
    config: { native: true }
  })

  const captionRef: any = useRef()
  const captionProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    ref: captionRef,
    config: { native: true }
  })

  const imageOneRef: any = useRef()
  const imageOneProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    // leave: {opacity: 0},
    ref: imageOneRef,
    config: { native: true }
  })

  useChain(
    [wrapperRef, titleRef, captionRef, imageOneRef],
    [0.3, 0.5, 0.6, 0.6]
  )

  return (
    <Wrapper style={wrapperProps}>
      <TextSection>
        <TitleWrapper style={titleProps}>
          <Title>{`BUILD ONE TODAY\nDISINTIGRATE LATER`}</Title>
        </TitleWrapper>
        <CaptionWrapper style={captionProps}>
          <Caption>{`Peanuts aren’t technically nuts`}</Caption>
        </CaptionWrapper>
      </TextSection>
      <ImageSection>
        <Image1 style={imageOneProps} src={img.one} />
      </ImageSection>

    </Wrapper>
  )
}

const Wrapper = styled(a.section)`
  padding: 100px 5% 0;
  background-color: #222;
  height: 100vh;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: 4vw;
`

const TitleWrapper = styled(a.div)`
  padding: 10px 0;
`

const Caption = styled.h2`
  font-size: 2vw;
`

const CaptionWrapper = styled(a.div)`
  padding: 10px;
`

const TextSection = styled.div`
  width: 50vw;
  color: #fff;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  img {
    position: relative;
    width: 30vw;
    bottom: 100px
  }
`

const Image1 = styled(a.img)`
  width: 50vw;
  bottom: 100px;
  right: 50px
`

export default Section1
