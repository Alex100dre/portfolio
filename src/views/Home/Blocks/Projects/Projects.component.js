import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '../../../../components/commons/Grid'
import ProjectCard from './ProjectCard'
import Section, { SectionLoader, SectionTitle } from '../../../../components/commons/Section'


const Projects = ({
  fetchProjects, loading, error, list,
}) => {
  useEffect(() => {
    fetchProjects()
  }, [])

  const projectsDOM = list.map((project, index) => (
    <ProjectCard key={project.name} project={project} index={index} />
  ))
  const ErrorDOM = ({ message }) => (
    <p>
      error :
      {message}
    </p>
  )
  return (
    <Section>
      <SectionTitle>Projets</SectionTitle>

      {loading && (<SectionLoader size={80} />)}

      <div>
        <Grid cols={{
          xs: 1, sm: 2, md: 4, lg: 4,
        }}
        >
          {!loading && list && list.length > 0 && [projectsDOM]}
          {!loading && error && <ErrorDOM message={error.message} />}
        </Grid>
      </div>
    </Section>
  )
}

Projects.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape(),
  list: PropTypes.arrayOf(PropTypes.shape()),
}

Projects.defaultProps = {
  error: null,
  list: [],
}

export default Projects
