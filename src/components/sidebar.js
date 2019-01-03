import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <a href="#" onClick={this.toggleMenu} className={open}>
            <span className="material-icons">remove</span>
            <span className="material-icons">remove</span>
            <span className="material-icons">remove</span>
          </a>
        </div>
        <h3 className="name">Mark Froehlich</h3>
        <div className="menu-group sections-nav">
          <a href="#stack" ref={l => (this.sidebarLinks[1] = l)}>
            <span className="material-icons">code</span>
            <p className="hidden">Stack</p>
          </a>
          <a href="/#projects" ref={l => (this.sidebarLinks[2] = l)}>
            <span className="material-icons">whatshot</span>
            <p className="hidden">Projects</p>
          </a>
          <a href="/#resume" ref={l => (this.sidebarLinks[3] = l)}>
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
  position: -webkit-sticky;
  left: 0;
  top: 0;
  background: transparent;
  height: 100vh;
  width: 200px;
  padding: 25px 20px 50px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;

  .name {
    display: none;
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
    background-color: rgba(0, 0, 0, 0.75);

    .name {
      display: block;
      font-size: 24px;
    }

    .material-icons,
    p {
      color: white;
    }

    .menu-group.sections-nav {
      display: flex;
      a {
        justify-content: flex-start;
        color: white;
        font-size: 26px;

        .hidden {
          opacity: 1;
          font-size: inherit;
          margin-left: 20px;
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
      flex-wrap: wrap;
      color: #333;
      height: 50px;
      margin-bottom: 15px;
      justify-content: flex-start;
      align-items: center;
      text-decoration: none;
      transition: transform 0.2s ease-out;

      &:hover {
        transform: scale(1.3);

        .hidden {
          opacity: 0.8;
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
    font-family: 'Montserrat';
    font-size: 20px;
    opacity: 0;
    margin-bottom: 0;
    margin-left: 5px;
    transition: all 0.4s ease-in-out;
  }
`

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: '',
}
