import React from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import hero from '../images/portfolio-hero-min.gif'
import { FixedHeroImage } from './globalStyle'

const IntroSection = () => (
  <div>
    <HeroImage />
    <Spring
      from={{ background: 'linear-gradient(20deg, coral 100%, white 0%)' }}
      to={{ background: 'linear-gradient(90deg, coral 50%, white 50%)' }}
      delay="500"
    >
      {styles => (
        <div style={styles}>
          <InfoSection>
            <div className="name">
              <h2>
                Mark
                <br />
                Froehlich
              </h2>
              <div className="title">
                <h4>Web Developer</h4>
              </div>
            </div>
          </InfoSection>
        </div>
      )}
    </Spring>
  </div>
)

const HeroImage = styled(FixedHeroImage)`
  background: url(${hero}) no-repeat center/cover;

  @media screen and (max-width: 750px) {
    display: none;
  }
`

const InfoSection = styled.div`
  padding-bottom: 50vh;

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
  }

  h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 70px;
    text-align: left;
    margin: 0 auto;
    line-height: 0.95;
    color: #333;
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
  }

  h4 {
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 36px;
    margin-top: 10px;
  }

  @media screen and (max-width: 750px) {
    .name {
      height: 100vh;
    }
  }
`

export default IntroSection
