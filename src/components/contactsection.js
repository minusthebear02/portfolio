import React, { Component } from 'react'
import styled from 'styled-components'

import linkedIn from '../images/linkedin-logo.svg'

export default class ContactSection extends Component {
  render() {
    return (
      <ContactSectionWrapper>
        <h1>let's collaborate...</h1>
        <div className="socials">
          <Social href="mailto:mfroeh2@gmail.com">
            <span className="material-icons">email</span>
            <p>mfroeh2[at]gmail[dot]com</p>
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
  padding-bottom: 200px;

  h1 {
    position: relative;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 75px;
    color: white;
    margin: 0 auto 50px;
    z-index: 4;
  }

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
    font-family: 'Montserrat';
  }

  &:hover {
    img,
    .material-icons {
      transform: translateY(-8px);
      filter: drop-shadow(15px 20px 5px #222);
    }
  }
`
