import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Tilt from 'react-vanilla-tilt'

export default class Project extends Component {
  render() {
    const { name, images, description, stack, features } = this.props

    return (
      <ProjectWrapper>
        <h2 className="project-name">{name}</h2>
        <div className="project-content">
          <div className="project-image">
            {images.map(image => {
              const mainImageSize = image.node.childImageSharp.sizes
              const mainImageName = image.node.name
              return (
                <div className={`${name}-image`} key={mainImageName}>
                  <Tilt options={{ glare: true }}>
                    <Img
                      title={mainImageName}
                      alt={mainImageName}
                      sizes={mainImageSize}
                    />
                  </Tilt>
                </div>
              )
            })}
          </div>
          <div className="project-description">
            <div
              className="project-description-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <h4>Features</h4>
            <hr />
            <ul>
              {features.map(feature => (
                <li key={feature.substring(feature.length, -10)}>{feature}</li>
              ))}
            </ul>
            <h4>Tech Stack</h4>
            <hr />
            <ul>
              {stack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </ProjectWrapper>
    )
  }
}

const ProjectWrapper = styled.div`
  background-color: coral;
  padding: 160px 50px;
  z-index: 5;
  position:relative;
  -ms-transform: skewY(10deg);
  -webkit-transform: skewY(10deg);
  transform: skewY(10deg);
  color: #444;
  box-shadow: inset 0px 9px 50px -15px #333;


}

  &:nth-child(odd) {
    background-color: white;
    -ms-transform: skewY(-10deg);
    -webkit-transform: skewY(-10deg);
    transform: skewY(-10deg);

    .project-name,
    .project-content {
      -ms-transform: skewY(10deg); /* IE 9 */
      -webkit-transform: skewY(10deg); /* Safari */
      transform: skewY(10deg);

      .project-image {
        order: 2;
      }

      .project-description {
        order: 1;
      }
    }
  }

  .project-name {
    text-transform: capitalize;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: calc(3.2vw + 3.2vh + 0.5vmin);
    -ms-transform: skewY(-10deg); /* IE 9 */
    -webkit-transform: skewY(-10deg); /* Safari */
    transform: skewY(-10deg);
    margin-bottom: 100px;
  }

  .project-content {
    display: flex;
    -ms-transform: skewY(-10deg); /* IE 9 */
    -webkit-transform: skewY(-10deg); /* Safari */
    transform: skewY(-10deg);
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: auto;

    .project-image {
      width: 45%;
      min-width: 300px;

      /* Tilt styles */
      > div > div {
        width: 100% !important;
        background: transparent !important;
        box-shadow: none !important;
        margin: 0 !important;
      }

      .gatsby-image-wrapper {
        overflow: visible !important;
      }

      img {
        width: 70% !important;
        height: auto !important;
        right: 0;
        margin: auto;
        filter: drop-shadow(0 5px 10px #333);
      }
    }

    .project-description {
      font-family: 'Montserrat';
      width: 45%;
      min-width: 300px;

      .project-description-text {
        margin-bottom: 25px;

        a {
          color: #333;
        }
      }

      h4 {
        margin-bottom: 10px;
      }

      hr {
        width: 75px;
      }
    }
  }

  .kovi-image .gatsby-image-wrapper div {
    padding-bottom: 160% !important;
  }

  @media screen and (max-width: 990px) {
    padding: 200px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 100px 0;

    .project-name {
      margin-bottom: 25px;
    }

    .project-description {
      width: 90% !important;
      order: 2 !important;
      padding: 0 40px;
    }

    .project-image {
      width: 90% !important;
      order: 1 !important;
    }
  }
`
