import styled from 'styled-components'

export const Ppr = styled.div`
  border-radius: 4px;
  background-color:#191a1d;
  overflow: hidden;
  padding: 16px 24px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  margin-top: ${({ overlapTop }) => (overlapTop || 'auto')};
`
