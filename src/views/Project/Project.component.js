import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Container } from 'react-grid-system'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'
import Section, { SectionLoader } from '../../components/commons/Section/Section.component'
import Paper from '../../components/commons/Paper'
import { SectionTitle } from '../../components/commons/Section'
import { Content } from '../Home/Blocks/About/About.style'
import Header from '../../components/commons/Header'
import Button from '../../components/commons/Button'
import { ProjectLinkContainer, Thumbnail } from './project.style'
import Grid from '../../components/commons/Grid'

export default class Project extends Component {
  constructor() {
    super()
    this.state = {
      project: null,
      loading: true,
    }
  }

  componentDidMount() {
    const { props } = this
    const { projectId } = props.match.params
    const ref = firebase.database().ref(`projects/${projectId}`)

    ref.on('value', (snapshot) => {
      this.setState({
        project: snapshot.val(),
        loading: false,
      })
    }, (error) => {
      console.log(`Error while getting data from firebase database:\n  ${error}`)
    })
  }


  render() {
    const { props, state } = this
    const notLoadedProject = props.project

    const project = state.project ? state.project : notLoadedProject

    const { loading } = this.state

    return (
      <div>
        <Header bgImage={project.thumbnail} blur />
        <Container>
          <Fade bottom distance="100px">
            <Section data-prjid={project.id}>
              <Paper overlapTop>
                {loading && (<SectionLoader size={80} />)}
                {!loading && (
                  <div>
                    <SectionTitle>{project.name}</SectionTitle>
                    <Content>
                      <Grid cols={{
                        xs: 1, sm: 1, md: 2, lg: 2,
                      }}
                      >
                        {project.summary}
                        <Thumbnail src={project.thumbnail} alt={project.name} />
                      </Grid>

                    </Content>
                    {project.link && (
                      <ProjectLinkContainer>
                        <Button href={project.link}>Consulter</Button>
                      </ProjectLinkContainer>
                    )}
                  </div>
                )}
              </Paper>
            </Section>
          </Fade>
        </Container>
      </div>
    )
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    summary: PropTypes.string,
    thumbnail: PropTypes.string,
    link: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.node,
    }).isRequired,
  }).isRequired,
}

Project.defaultProps = {
  project: {
    id: 0,
    name: 'Unknown',
    summary: 'Error: Project not found.',
    thumbnail: 'Unknown',
    link: null,
    loading: false,
  },
}
