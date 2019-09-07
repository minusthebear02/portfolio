import React, { Component } from 'react'
import styled from 'styled-components'

import resumeImg from '../images/resume/Mark-Froehlich-Resume-8:19.jpg'
import resumePdf from '../images/resume/Mark-Froehlich-Resume-8:19.pdf'
import { SectionTitle } from './globalStyle'

export default class ResumeSection extends Component {
  render() {
    return (
      <>
        <ResumeWrapper>
          <SectionTitle id="resume">resume</SectionTitle>
          <a href={resumePdf}>
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
  padding: 75px 0px;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2px;

  a {
    width: 90%;
    max-width: 875px;
  }
`
