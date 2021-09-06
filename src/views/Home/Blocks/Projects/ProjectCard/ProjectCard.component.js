import React from 'react'
import PropTypes from 'prop-types'
import Dotdotdot from 'react-dotdotdot'
import Fade from 'react-reveal/Fade'

import APIS from '../../../../../constants/apis'
import { CardContent, CardMedia, CardTitle } from '../../../../../components/commons/Card'

import { PrjCard, PrjLink } from './ProjectCard.style'

const ProjectCard = ({ project, index }) => {
  const delay = index * 200
  const thumbnailUrl = project.thumbnail.formats.small
    ? `${APIS.PORTFOLIO_SERVER.DOMAIN}${project.thumbnail.formats.small.url}`
    : `${APIS.PORTFOLIO_SERVER.DOMAIN}${project.thumbnail.url}`

  return (
    <Fade bottom delay={delay} distance="30px">
      <PrjCard>
        <PrjLink to={`/project/${index}/${encodeURIComponent(project.name)}`}>
          <CardMedia image={thumbnailUrl} title={project.name} />
          <CardContent>
            <CardTitle>{project.name}</CardTitle>
            <Dotdotdot clamp={3}>
              {project.summary}
            </Dotdotdot>
          </CardContent>
        </PrjLink>
      </PrjCard>
    </Fade>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectCard
