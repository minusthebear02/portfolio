import React, { Component } from 'react'
import styled from 'styled-components'

import { skills } from '../utilities/constants'
import { SectionTitle } from './globalStyle'

export default class SkillsSection extends Component {
  render() {
    return (
      <SkillsWrapper>
        <SectionTitle id="stack" style={{ color: '#777' }}>
          tech
        </SectionTitle>
        <Skills>
          {skills.map(skill => (
            <div className="skill" key={skill.name}>
              <div className="image-wrapper">
                <img src={skill.logo} alt={skill.alt} />
              </div>
              <li>{skill.name}</li>
            </div>
          ))}
        </Skills>
      </SkillsWrapper>
    )
  }
}

const SkillsWrapper = styled.div`
  position: relative;
  z-index: 4;
  margin-top: -100vh;
  box-shadow: 0 -60px 150px 100px white;
  background-color: white;
`

const Skills = styled.div`
  background-color: #fff;
  padding: 0 100px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .skill {
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 27%;
    min-width: 125px;
    margin: 0 3%;

    .image-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }

    li {
      font-family: 'Raleway', sans-serif;
      font-weight: 100;
      font-size: 20px;
      list-style: none;
      margin: 35px 0;
      text-align: center;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      display: none;
    }

    img {
      filter: drop-shadow(10px 10px 5px #ddd);
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      img {
        filter: drop-shadow(15px 20px 5px #ddd);
        transform: translateY(-8px);
      }
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0 30px 100px;
  }
`
