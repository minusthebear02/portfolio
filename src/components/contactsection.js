import React, { Component } from 'react'
import styled from 'styled-components'

import linkedIn from '../images/linkedin-logo.svg'
import { SectionTitle } from './globalStyle'

export default class ContactSection extends Component {
  render() {
    return (
      <ContactSectionWrapper>
        <SectionTitle>let's collaborate</SectionTitle>
        <div className="socials">
          <Social href="mailto:mfroeh2@gmail.com">
            <span className="material-icons">email</span>
            <p>mfroeh2@gmail.com</p>
          </Social>
          <Social
            href="https://www.linkedin.com/in/mark-froehlich/"
            target="_blank"
          >
            <img src={linkedIn} />
            <p>/in/mark-froehlich</p>
          </Social>
        </div>
      </ContactSectionWrapper>
    )
  }
}

const ContactSectionWrapper = styled.div`
  position: relative;
  background-color: #333;
  z-index: 5;
  text-align: center;
  padding: 0 25px 100px;

  .socials {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
  }
`

const Social = styled.a`
  display: flex;
  flex-direction: column;
  position: inline-block;
  text-decoration: none;

  .material-icons {
    font-size: 200px;
    color: #333;
    filter: drop-shadow(10px 10px 5px #222);
    transition: all 0.2s ease-out;
  }

  img {
    width: 177px;
    filter: drop-shadow(10px 10px 5px #222);
    margin: 0 auto 25px;
    transition: all 0.2s ease-out;
  }

  p {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 20px;
  }

  &:hover {
    img,
    .material-icons {
      transform: translateY(-8px);
      filter: drop-shadow(15px 20px 5px #222);
    }
  }
`
