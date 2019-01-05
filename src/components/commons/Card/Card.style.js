import styled from 'styled-components'

export const Crd = styled.div`
  border-radius: 4px;
  background-color:#18191d;
  overflow: hidden;
`

export const CrdMedia = styled.div`
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
`

export const CrdContent = styled.div`
  padding: 16px;
`

export const CrdTitle = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`
