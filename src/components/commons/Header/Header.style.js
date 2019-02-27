import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: relative;
  min-height: 300px;
  padding: 40px 0;
  box-sizing: border-box;
`

export const Background = styled.div`
  background: ${({ bgImage, bgColor }) => (bgImage ? `url(${bgImage})` : bgColor)} no-repeat center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ blur }) => blur && `
    filter: blur(8px);
  `}
`

export const Content = styled.div`
  
`
