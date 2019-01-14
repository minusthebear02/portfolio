import React, { Component } from 'react'
import styled from 'styled-components'

import Skill from '../components/skill'
import { skills } from '../utilities/constants'
import { SectionTitle } from './globalStyle'

export default class SkillsSection extends Component {
  render() {
    return (
      <SkillsWrapper>
        <SectionTitle id="stack" style={{ color: '#777' }}>
          stack
        </SectionTitle>
        <Skills>
          {skills.map(skill => (
            <Skill
              key={skill.id}
              name={skill.name}
              logo={skill.logo}
              alt={skill.alt}
            />
          ))}
        </Skills>
      </SkillsWrapper>
    )
  }
}

const SkillsWrapper = styled.div`
  position: relative;
  z-index: 4;
  background-color: white;
  box-shadow: inset 0px 9px 50px -15px #333;
`

const Skills = styled.div`
  background-color: #fff;
  padding: 0 100px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 950px) {
    padding: 0 30px 100px;
  }
`
