import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot'
import {
  Card, CardMedia, CardContent, CardTitle,
} from '../../../../../components/commons/Card'

import { PrjCard } from './ProjectCard.style'

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props

    return (
      <PrjCard>
        <CardMedia image={project.thumbnail} title={project.name} />
        <CardContent>
          <CardTitle>{ project.name }</CardTitle>
          {/* <p>{project.summary}</p> */}
          <Dotdotdot clamp={3}>
            { project.summary }
          </Dotdotdot>
        </CardContent>
      </PrjCard>
    )
  }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
}
