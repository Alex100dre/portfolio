import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-grid-system'
import Fade from 'react-reveal/Fade'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import Section, { SectionLoader } from '../../components/commons/Section/Section.component'
import Paper from '../../components/commons/Paper'
import { SectionTitle } from '../../components/commons/Section'
import { Content } from '../Home/Blocks/About/About.style'
import Header from '../../components/commons/Header'
import Button from '../../components/commons/Button'
import { ProjectLinkContainer, Thumbnail } from './project.style'
import Grid from '../../components/commons/Grid'
import { selectProject } from '../../store/projects'
import Technologies from "./Blocks/Technologies";

const Project = ({ match, history, fetchOneProject, data:fetchedProject }) => {
  const [loading, setLoading] = useState(false)
  const [projectId, setProjectId] = useState(match.params.projectId)
  const foundProject = useSelector(state => selectProject(state, projectId))
  const [project, setProject] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  useEffect(() => {
      if (foundProject || !fetchedProject) {
        return
      }
      console.log('SET FETCHED PROJECT')
      setProject(fetchedProject)
    }
  , [fetchedProject])

  useEffect(() => {
    if(!foundProject) {
      return
    }
    setLoading(true)
    setProject(foundProject)
  }, [foundProject])

  useEffect(() => {
    console.log('project', project)
    if (project && project.id) {
      setLoading(false)
    }
    console.log('loading', loading)
    if (loading) {
      return
    }
    if ((!project && !foundProject) || (project && !project.id && !foundProject)) {
      console.log('FETCH PROJECT')
      fetchOneProject(projectId)
      setLoading(true);
    }
  }, [project])

  useEffect(() => {
    if (loading || !project || !project.id) {
      return
    }

    const newThumbnail = project.thumbnail.formats.large
      ? project.thumbnail.formats.large.url
      : project.thumbnail.url
    console.log('newThumbnail', newThumbnail)
    setThumbnail(newThumbnail)
  }, [loading])

  return (
    <div>
      <Header bgImage={thumbnail} bgColor="#191A1D" blur>
        <Container>
          <Button onClick={history.goBack}>← Retour</Button>
        </Container>
      </Header>
      <Container>
        <Fade bottom distance="100px">
          <Section data-prjid={projectId}>
            <Paper overlapTop>
              {loading && (<SectionLoader size={80} />)}
              {!loading && project && project.id && (
                <div>
                  <SectionTitle>{project.name}</SectionTitle>
                  <Content>
                    <Grid cols={{
                      xs: 1, sm: 1, md: 2, lg: 2,
                    }}
                    >
                      <div>
                        <Technologies list={project.technologies} />
                        <ReactMarkdown children={project.description} />
                      </div>
                      <Thumbnail src={thumbnail} alt={project.name} />
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

Project.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }),
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    summary: PropTypes.string,
    thumbnail: PropTypes.string,
    link: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    technologies: PropTypes.array,
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

export default Project
