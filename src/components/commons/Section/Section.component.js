import React from 'react'
import PropTypes from 'prop-types'
import MDSpinner from 'react-md-spinner'
import { Sctn, SectionLoaderContainer } from './Section.style'

const Section = (props) => {
  const { children, bgImage } = props
  return (
    <Sctn {...props} bgImage={bgImage}>
      {children}
    </Sctn>
  )
}

Section.propTypes = {
  bgImage: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Section.defaultProps = {
  children: null,
}

export default Section

export const SectionLoader = props => (
  <SectionLoaderContainer>
    <MDSpinner {...props} />
  </SectionLoaderContainer>
)
