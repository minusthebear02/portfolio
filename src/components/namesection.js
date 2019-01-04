import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Spring } from 'react-spring'

const HERO_IMAGE = graphql`
  {
    file(relativePath: { regex: "/portfolio-hero/" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default class IntroSection extends Component {
  state = {
    loaded: false,
  }

  render() {
    const { loaded } = this.state
    return (
      <div>
        <StaticQuery
          query={HERO_IMAGE}
          render={data => (
            <>
              <HeroImageWrapper className="hero-wrapper">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  onLoad={() => this.setState({ loaded: true })}
                  className="hero-image"
                />
              </HeroImageWrapper>
              <Spring
                from={{
                  background: 'linear-gradient(20deg, coral 100%, white 0%)',
                }}
                to={{
                  background: loaded
                    ? 'linear-gradient(90deg, coral 50%, white 50%)'
                    : 'linear-gradient(20deg, coral 100%, white 0%)',
                }}
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
            </>
          )}
        />
      </div>
    )
  }
}

const HeroImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  top: 0;
  overflow: hidden;

  .hero-image {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
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

      h2 {
        margin-top: -50px;
      }
    }
  }
`
