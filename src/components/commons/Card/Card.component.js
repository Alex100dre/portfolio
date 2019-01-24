import React from 'react'
import PropTypes from 'prop-types'
import {
  Crd, CrdMedia, CrdContent, CrdTitle,
} from './Card.style'

export const Card = React.forwardRef(({ children }, ref) => <Crd ref={ref}>{ children }</Crd>)

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Card.defaultProps = {
  children: null,
}

export const CardMedia = ({ image, title }) => <CrdMedia image={image} title={title} />

CardMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
}

CardMedia.defaultProps = {
  title: null,
}

export const CardContent = ({ children }) => <CrdContent>{ children }</CrdContent>

CardContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

CardContent.defaultProps = {
  children: null,
}
export const CardTitle = ({ children }) => <CrdTitle>{ children }</CrdTitle>

CardTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

CardTitle.defaultProps = {
  children: null,
}
