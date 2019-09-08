import React, { useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { animated as a, useChain, useSpring, config } from 'react-spring'
import { intersectOptions } from '.'


const Section2: React.FC = () => {
  const [ref, inView] = useInView(intersectOptions)

  useChain(inView ? [] : [], [
  ])

  return (
    <Wrapper ref={ref}>
      <TextSection>
        <Subtitle>How long is a marathon in miles?</Subtitle>
        <Title>{`MARATHON - WIKIPEDIA, THE FREE ENCYCLOPEDIA`}</Title>
        <Paragraph>The marathon is a long-distance running event with an official distance of 42.195 kilometres</Paragraph>
      </TextSection>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  padding: 6vw 5% 0;
  background-color: #d63031;
  height: 50vh;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.h2`
  font-size: 3vw;
`

const Title = styled.h1`
  font-size: 5vw;
  margin: 1vw 0;
`

const Paragraph = styled.p`
  font-size: 2vw;
`

export default Section2
