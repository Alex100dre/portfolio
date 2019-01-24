import styled from 'styled-components'

export const Sctn = styled.section`
  padding: ${props => (props.noPadding ? '0' : '20px 0')};
`

export const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
`

export const SectionLoaderContainer = styled.div`
  text-align: center;
`
