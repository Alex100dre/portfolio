import styled, { keyframes } from 'styled-components'

export const Header = styled.header`position: relative;`

export const Title = styled.h1`
  text-shadow: -1px -1px 1px rgba(0,0,0,0.3), 1px 1px 1px rgba(0,0,0,0.3), 0 0 10px #000;
  line-height: 1;
  font-size: 50px;
  padding: 200px 0;
  margin: 0;
  color: #fff;
  opacity: .8;
  
  & span.small {
    font-size: 25px;
  }
  
  @media (min-width: 768px) {
    font-size: 130px;
    
    & span.small {
      font-size: 50px;
      margin-left: -10px;
    }
  }
`

const LSDAnimation = keyframes`
  0% {
    background-position: 1% 80%
}
  50% {
    background-position: 99% 20%
}
  to {
    background-position: 1% 80%
  }
`

export const LSDTextContainer = styled.span`
  display: block;
  text-align: right;
  position: relative;
  min-height: 130px;
`

export const LSDShadow = styled.span`
    color: transparent;
    text-shadow: -1px -1px 1px rgba(0,0,0,0.3), 1px 1px 1px rgba(0,0,0,0.3), 0 0 10px #000;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
`

export const LSDText = styled.strong`
  
  animation: ${LSDAnimation} 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(124deg,#ff470f,#ff3860,#b86bff,#3273dc);
  background-size: 800% 800%;
  text-shadow: none;
  
  position:absolute;
  top: 0;
  right: 0;
  z-index: 2;
`
