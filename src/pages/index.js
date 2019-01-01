import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NameSection from '../components/namesection'
import SkillsSection from '../components/skillssection'
import ProjectsSection from '../components/projectssection'
import ResumeSection from '../components/resumesection'
import ContactSection from '../components/contactsection'
import Sidebar from '../components/sidebar'

export default class IndexPage extends Component {
  handleScroll = () => {
    let projectsBottom = this.projects.getBoundingClientRect().bottom - 100

    this.sidebar.sidebarLinks.forEach(link => {
      if (link.getBoundingClientRect().bottom > projectsBottom) {
        link.style.color = 'white'
      } else {
        link.style.color = '#333'
      }
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Layout>
        <SEO keywords={['gatsby', 'application', 'react']} />
        <NameSection />
        <Sidebar ref={s => (this.sidebar = s)} />
        <SkillsSection />
        <div ref={p => (this.projects = p)}>
          <ProjectsSection />
        </div>
        <ResumeSection />
        <ContactSection />
      </Layout>
    )
  }
}
