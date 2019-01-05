import styled from 'styled-components'
import Youtube from 'react-youtube'

import OverlayImg from './images/overlay.png'


export const YTVideoBgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  //z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const YTVideoBg = styled(Youtube)`
  position: absolute;
  top: ${({ centerDelta }) => (centerDelta.vertical ? `${centerDelta.vertical}px` : ' 0')};
  right: 0;
  bottom: 0;
  left: ${({ centerDelta }) => (centerDelta.horizontal ? `${centerDelta.horizontal}px` : ' 0')};
  margin: auto;
`

export const Overlay = styled.div`
  background:url(${OverlayImg}) repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
