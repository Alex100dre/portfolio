import styled from 'styled-components'
import Terminal from 'terminal-in-react'


const winHeight = window.innerHeight
const winWidth = window.innerWidth
export const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: ${winHeight}px;
  background-color: rgba(0,0,0,.4);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Bash = styled(Terminal)`
  box-shadow: 0px 0px 5px 0px pink;
  max-width: 700px;
  max-height: 500px;
`
