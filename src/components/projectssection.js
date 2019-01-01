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

const ProjectsSectionWrapper = styled.div`
  position: relative;
  background-image: linear-gradient(rgb(115, 180, 237), #333);
  z-index: 5;
  box-shadow: inset 0px 9px 50px -15px #333;

  h1 {
    position: relative;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 75px;
    color: white;
    margin: 0 auto 150px;
    z-index: 4;
    padding-top: 100px;
  }
`
