import React, { Component } from 'react'
import styled from 'styled-components'
import { SectionTitle } from './globalStyle'

export default class Me extends Component {
  render() {
    return (
      <MeSectionWrapper id="me">
        <SectionTitle>me</SectionTitle>
        <div class="description">
          <p>
            I'm a Software Developer who likes building websites and web apps that delight their users.
            I like to craft tools that make people's
            lives better, whether in big ways or small; professional or
            personal.
          </p>
          <p>
            I tend to prefer working on the frontend using awesome tools and libraries like React/React Native or Ruby on Rails but I've got a ton of experience learning new (or old) things necessary to get a job done. From setting up serverless functions with node.js in AWS to creating custom Wordpress themes from scratch, whatever the problem is I can figure out a solution.
          </p>
          <p>
            In my free time I like to spend time out on the golf course or
            playing with my dog, but I usually find myself behind a screen or a
            book learning a new framework or honing the knowledge I already
            have.
          </p>
        </div>
      </MeSectionWrapper>
    )
  }
}

const MeSectionWrapper = styled.div`
  position: relative;
  background-color: rgb(115, 180, 237);
  z-index: 4;
  padding: 0 10% 100px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.3);

  .description {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: white;
    max-width: 750px;
    margin: auto;
  }
`
