import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dotdotdot from 'react-dotdotdot'
import Fade from 'react-reveal/Fade'

import {
  Card, CardMedia, CardContent, CardTitle,
} from '../../../../../components/commons/Card'

import { PrjLink } from './ProjectCard.style'

export default class ProjectCard extends Component {
  render() {
    const { project, index } = this.props
    const delay = index * 200

    return (
      <Fade bottom delay={delay} distance="30px">
        <Card>
          <PrjLink to={`/project/${index}/${encodeURIComponent(project.name)}`}>
            <CardMedia image={project.thumbnail} title={project.name} />
            <CardContent>
              <CardTitle>{ project.name }</CardTitle>
              {/* <p>{project.summary}</p> */}
              <Dotdotdot clamp={3}>
                { project.summary }
              </Dotdotdot>
            </CardContent>
          </PrjLink>
        </Card>
      </Fade>
    )
  }
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
}
