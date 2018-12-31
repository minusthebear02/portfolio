import React from 'react'
import styled from 'styled-components'

import { skills } from '../utilities/constants'

const SkillsSection = () => (
  <SkillsWrapper>
    <TransitionGradient />
    <h1 id="stack" className="section-title">
      tech...
    </h1>
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

export default SkillsSection

const SkillsWrapper = styled.div`
  position: relative;
  z-index: 4;
  margin-top: -150vh;

  .section-title {
    background-color: #fff;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 75px;
    color: #777;
    margin: 0 auto;
    padding: 100px 0 50px;
  }
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
    min-width: 200px;
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
    padding: 0 30px 300px;
  }
`

const TransitionGradient = styled.div`
  height: 400px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #fff);
`
