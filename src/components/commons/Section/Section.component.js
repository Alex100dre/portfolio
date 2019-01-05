import React from 'react'
import PropTypes from 'prop-types'
import MDSpinner from 'react-md-spinner'
import { Sctn, SectionLoaderContainer } from './Section.style'

const Section = (props) => {
  const { children } = props
  return (
    <Sctn {...props}>
      {children}
    </Sctn>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Section.defaultProps = {
  children: null,
}

export default Section

export const SectionLoader = (props) => {
  return (
    <SectionLoaderContainer>
      <MDSpinner {...props} />
    </SectionLoaderContainer>
  )
}