import React, { Component } from 'react'
import * as firebase from 'firebase'
import Grid from '../../../../components/commons/Grid'
import ProjectCard from './ProjectCard'
import Section, { SectionTitle, SectionLoader } from '../../../../components/commons/Section'


export default class Projects extends Component {
  constructor() {
    super()

    this.state = {
      projects: [],
      loading: true,
    }
  }

  componentWillMount() {
    const ref = firebase.database().ref('projects')

    ref.on('value', (snapshot) => {
      this.setState({
        projects: snapshot.val(),
        loading: false,
      })
    }, (error) => {
      console.log(`Error while getting data from firebase database:\n  ${error}`)
    })
  }

  render() {
    const { projects, loading } = this.state

    const projectsDOM = projects.map((project, index) => (
      <ProjectCard key={project.name} project={project} index={index} />
    ))

    return (
      <Section>
        <SectionTitle>Projets</SectionTitle>

        {loading && (<SectionLoader size={80} />)}

        <div>
          <Grid cols={{
            xs: 1, sm: 2, md: 4, lg: 4,
          }}
          >
            {!loading && [projectsDOM]}
          </Grid>
        </div>
      </Section>
    )
  }
}
