import React, { Component } from 'react'
import styled from 'styled-components'

export default class Skill extends Component {
  state = {
    visible: false,
  }
  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleObserver, {
      threshold: 0.5,
    })

    this.observer.observe(this.skill)
  }

  handleObserver = (skills, observer) => {
    skills.forEach(skill => {
      if (skill.intersectionRatio > 0) {
        this.setState({ visible: true })
        observer.unobserve(skill.target)
      }
    })
  }

  render() {
    const { name, logo, alt } = this.props
    const { visible } = this.state
    return (
      <SkillWrapper
        className="skill"
        ref={s => {
          this.skill = s
        }}
        visible={visible}
      >
        <div className="image-wrapper">
          <img src={logo} alt={alt} />
        </div>
        <li>{name}</li>
      </SkillWrapper>
    )
  }
}

const SkillWrapper = styled.div`
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
    filter: ${props =>
      props.visible
        ? 'drop-shadow(10px 10px 5px #ddd)'
        : 'drop-shadow(0 0 0 white)'};
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    img {
      filter: drop-shadow(15px 20px 5px #ddd);
      transform: translateY(-8px);
    }
  }
`
