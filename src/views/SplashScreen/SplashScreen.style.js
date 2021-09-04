import styled from 'styled-components'
import Lottie from 'react-lottie'

export const SplashScreenBg = styled.div`
  background-color:#000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .15s bottom ease-in-out, .2s opacity ease-in-out;
  ${({ isActive }) => !isActive && `
    bottom: ${window.innerHeight}px;
    opacity: 0;
  `}
`

export const LogoAnimation = styled(Lottie)`
  height: 100%;
  width: 100%;
  max-width: 800px;
  max-height: 800px;
`
