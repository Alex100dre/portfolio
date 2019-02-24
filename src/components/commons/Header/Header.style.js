import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: relative;
  min-height: 300px;
  background: ${({ bgImage, bgColor }) => (bgImage ? `url(${bgImage})` : bgColor)} no-repeat center;
  background-size: cover;
  
  ${({ blur }) => blur && `
    filter: blur(8px);
  `}
`
