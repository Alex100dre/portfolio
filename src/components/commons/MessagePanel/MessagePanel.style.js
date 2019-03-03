import styled from 'styled-components'

export const Panel = styled.div`
  position: fixed;
  z-index: 800;
  bottom: 0;
  right: 0;
  background-color:#000;
  color: #ccc;
  padding: 15px 60px 15px 25px;
`
export const CloseButton = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  
  &:before, &:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 23px;
    width: 2px;
    background-color: #ccc;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

`
