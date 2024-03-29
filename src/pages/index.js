import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import MeSection from '../components/mesection'
import NameSection from '../components/namesection'
import SkillsSection from '../components/skillssection'
import ProjectsSection from '../components/projectssection'
import ResumeSection from '../components/resumesection'
import ContactSection from '../components/contactsection'
import Sidebar from '../components/sidebar'

export default class IndexPage extends Component {
  handleScroll = () => {
    let projectsBottom = this.resume.getBoundingClientRect().top

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
        <SEO keywords={['gatsby', 'application', 'react']} title="Mark Froehlich | Software Dev" />
        <NameSection />
        <Sidebar ref={s => (this.sidebar = s)} />
        <MeSection />
        <SkillsSection />
        <ProjectsSection />
        <div ref={r => (this.resume = r)}>
          <ResumeSection />
        </div>
        <ContactSection />
      </Layout>
    )
  }
}
