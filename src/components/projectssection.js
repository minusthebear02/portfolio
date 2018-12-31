import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Project from './project'
import { projects } from '../utilities/constants'

const PROJECT_IMAGES = graphql`
  query imagesQuery {
    Images: allFile(filter: { relativePath: { regex: "/projects/" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 750) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default class ProjectsSection extends Component {
  constructor(props) {
    super(props)

    this.projectNodes = []
  }
  render() {
    return (
      <ProjectsSectionWrapper id="projects">
        <h1>projects...</h1>
        <Background />
        <StaticQuery
          query={PROJECT_IMAGES}
          render={data =>
            projects.map((project, i) => {
              const images = data.Images.edges.filter(({ node }) => {
                return node.relativePath.includes(project.name)
              })

              return (
                <Project
                  name={project.name}
                  description={project.description}
                  images={images}
                  features={project.features}
                  stack={project.stack}
                  key={project.name}
                />
              )
            })
          }
        />
      </ProjectsSectionWrapper>
    )
  }
}

const Background = styled.div`
  z-index: 4;
  background-image: linear-gradient(#fff, #333);
  top: 100px;
  bottom: -150px;
  left: 0;
  right: 0;
  position: absolute;
`

const ProjectsSectionWrapper = styled.div`
  position: relative;
  background-color: white;
  z-index: 5;

  h1 {
    position: relative;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 75px;
    color: #777;
    margin: 0 auto 150px;
    z-index: 4;
  }
`
