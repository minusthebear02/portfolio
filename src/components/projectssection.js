import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Project from './project'
import { projects } from '../utilities/constants'
import { SectionTitle } from './globalStyle'

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
  render() {
    return (
      <ProjectsSectionWrapper id="projects">
        <SectionTitle style={{ marginBottom: 150 }}>projects</SectionTitle>
        <StaticQuery
          query={PROJECT_IMAGES}
          render={data =>
            projects.map(project => {
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
  box-shadow: inset 0 22px 22px -15px rgba(0, 0, 0, 0.3);
`
