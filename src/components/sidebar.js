import React, { Component } from 'react'
import styled from 'styled-components'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.sidebarLinks = []
  }

  toggleMenu = e => {
    e.preventDefault()
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const open = this.state.open ? 'open' : 'closed'
    return (
      <SidebarWrapper className={open}>
        <div
          className="menu-group burger"
          ref={l => (this.sidebarLinks[0] = l)}
        >
          <a href="/#" onClick={this.toggleMenu} className={open}>
            <span className="material-icons">remove</span>
            <span className="material-icons">remove</span>
            <span className="material-icons">remove</span>
          </a>
        </div>
        <h3 className="name">Mark Froehlich</h3>
        <div className="menu-group sections-nav">
          <a href="/#me" ref={l => (this.sidebarLinks[1] = l)}>
            <span className="material-icons">face</span>
            <p className="hidden">Me</p>
          </a>
          <a href="/
          #stack" ref={l => ( this.sidebarLinks[2] = l )}>
            <span className="material-icons">code</span>
            <p className="hidden">Stack</p>
          </a>
          <a href="/#projects" ref={l => (this.sidebarLinks[3] = l)}>
            <span className="material-icons">whatshot</span>
            <p className="hidden">Projects</p>
          </a>
          <a href="/#resume" ref={l => (this.sidebarLinks[4] = l)}>
            <span className="material-icons">assignment_ind</span>
            <p className="hidden">Resume</p>
          </a>
        </div>
        <div className="menu-group" />
      </SidebarWrapper>
    )
  }
}

const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  background: transparent;
  width: 75px;
  padding: 25px 0 0 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;
  margin-bottom: -285px;

  .name {
    display: none;
    font-size: 24px;
    color: white;
    position: absolute;
    right: 25px;
    top: 23px;
    font-family: 'Raleway';
    font-weight: 100;
    white-space: nowrap;
  }

  /* Open Menu */
  &.open {
    width: 250px;
    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(20px);

    .name {
      display: block;
    }

    .material-icons,
    p {
      color: white;
    }

    .menu-group.sections-nav {
      display: flex;
      a {
        color: white;
        font-size: 26px;

        .hidden {
          opacity: 1;
          font-size: inherit;
          margin-left: 20px;
          display: block;
        }
      }
    }
  }
  /* End Open Menu */

  .menu-group {
    display: flex;
    flex-direction: column;

    &.sections-nav {
      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: #333;
      height: 50px;
      margin-bottom: 15px;
      text-decoration: none;
      transition: transform 0.2s ease-out;

      &:hover {
        .hidden {
          opacity: 0.8;
          display: block;
        }
      }
    }
  }

  .material-icons {
    font-family: 'Material Icons';
    color: inherit;
    font-size: 30px;
    text-align: center;
  }

  .burger {
    align-self: flex-start;
    color: #333;

    a {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: inherit;

      span {
        transition: all 0.4s ease-in-out;
      }

      &:hover {
        transform: none;
      }

      .material-icons {
        margin: -12px auto;
      }

      &.open {
        span:first-child {
          transform: rotate(45deg);
          margin: -5px auto -18px;
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:last-child {
          transform: rotate(-45deg);
          margin: -18px auto -12px;
        }
      }
    }

    @media screen and (min-width: 767px) {
      display: none;
    }
  }

  .hidden {
    position: absolute;
    left: 70px;
    font-family: 'Montserrat';
    font-size: 20px;
    opacity: 0;
    margin-bottom: 0;
    margin-left: 5px;
    display: none;
  }

  @media (max-width: 767px) {
    height: 100vh;
    margin-bottom: -100vh;

    .hidden {
      position: initial;
    }
  }
`
