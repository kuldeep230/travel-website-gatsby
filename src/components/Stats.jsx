import React from "react"
import styled from "styled-components"
import { StatsData } from "../data/StatsData"

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox
              data-aos="slide-right"
              data-aos-offset={
                index === 0
                  ? "5"
                  : index === 1
                  ? "5"
                  : index === 2
                  ? "5"
                  : index === 3
                  ? "5"
                  : null
              }
              data-aos-delay={
                index === 0
                  ? "0"
                  : index === 1
                  ? "100"
                  : index === 2
                  ? "200"
                  : index === 3
                  ? "300"
                  : null
              }
              data-aos-duration={
                index === 0
                  ? "600"
                  : index === 1
                  ? "900"
                  : index === 2
                  ? "1200"
                  : index === 3
                  ? "1500"
                  : null
              }
              data-aos-easing="ease-out-back"
              data-aos-mirror="false"
              data-aos-once="false"
              key={index}
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%auto;
  width: 100%auto;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 3.5rem;
`

const Description = styled.p``
