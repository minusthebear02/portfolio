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
            I'm a Web Developer who likes building websites and web apps for
            people to enjoy using. I like to craft tools that make people's
            lives better, whether in big ways or small, professional or
            personal.
          </p>
          <p>
            I work as a Web Developer for AMAC Inc working on their 10+ (mostly)
            WordPress sites trying to push forward the tech with some new
            JavaScript tools and frameworks like ES6 and React. I also work on
            personal side projects and professional pages an apps when possible.
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
  margin-top: -100vh;
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
