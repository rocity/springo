import React, { useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { animated as a, useChain, useSpring, config } from 'react-spring'
import { intersectOptions } from '.'

import * as img from '../../assets'


const Section3: React.FC = () => {
  const [ref, inView] = useInView(intersectOptions)

  const wrapperRef: any = useRef()
  const wrapperProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: wrapperRef,
    config: { native: true }
  })

  const imageRef: any = useRef()
  const imageProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: imageRef,
    config: { native: true }
  })

  useChain(inView ? [wrapperRef] : [], [
    0.5
  ])

  return (
    <Wrapper ref={ref} style={wrapperProps}>
      <ImageSection>
        <Image style={imageProps} src={img.two} />
      </ImageSection>
    </Wrapper>
  )
}

const Wrapper = styled(a.section)`
  display: flex;
  padding: 6vw 5% 0;
  background-color: #16a085;
  height: 100vh;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Image = styled(a.img)`
  width: 20vw;
`

export default Section3
