import React, { Component } from 'react'
import styled from 'styled-components'

import resumeImg from '../images/resume/Mark-Froehlich-Resume---Dec-2018.jpg'

export default class ResumeSection extends Component {
  render() {
    return (
      <>
        <ResumeWrapper>
          <h1 id="resume" className="section-title">
            resume...
          </h1>
          <a href={resumeImg}>
            <img src={resumeImg} alt="Mark Froehlich's super awesome resume" />
          </a>
        </ResumeWrapper>
      </>
    )
  }
}

const ResumeWrapper = styled.div`
  position: relative;
  color: white;
  z-index: 3;
  padding: 150px 50px;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: relative;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 75px;
    color: white;
    margin-bottom: 100px;
  }

  a {
    width: 90%;
    max-width: 875px;
  }
`
