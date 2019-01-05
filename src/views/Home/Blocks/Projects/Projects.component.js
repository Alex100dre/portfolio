import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-grid-system'
import * as firebase from 'firebase'
import { PoseGroup } from 'react-pose'
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

    const projectsDOM = projects.map(project => (
      <ProjectCard key={project.name} project={project} />
    ))

    return (
      <Section>
        <SectionTitle>Projets</SectionTitle>

        {loading && (<SectionLoader size={80} />)}

        <div>
          <Grid cols={{ xs: 1, sm: 2, md: 4, lg: 4, }}>
            <PoseGroup>
              {!loading && [projectsDOM]}
            </PoseGroup>
          </Grid>
        </div>
      </Section>
    )
  }
}
