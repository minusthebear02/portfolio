import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
                  <Img
                    title={mainImageName}
                    alt={mainImageName}
                    sizes={mainImageSize}
                  />
                </div>
              )
            })}
          </div>
          <div className="project-description">
            <p>{description}</p>
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
  box-shadow: 2px 2px 20px -5px black;

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
    font-size: 50px;
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
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .project-image {
      width: 45%;
      min-width: 300px;

      .gatsby-image-wrapper {
        overflow: visible !important;
      }

      img {
        width: 70% !important;
        height: auto !important;
        right: 0;
        margin: auto;
        -webkit-filer: drop-shadow(10px 10px 5px #bbb);
        filter: drop-shadow(0 5px 10px #333);
      }
    }

    .project-description {
      font-family: 'Montserrat';
      width: 45%;
      min-width: 300px;
      padding: 0 50px;

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
    .project-description {
      width: 90% !important;
      order: 2 !important;
    }

    .project-image {
      width: 90% !important;
      order: 1 !important;
    }
  }
`
