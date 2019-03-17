import styled, { css, keyframes } from 'styled-components'
import MDSpinner from 'react-md-spinner'
import React from 'react'
import { FORM_STATUS } from './index'
import Button from '../../../../components/commons/Button/Button.component'
import Section from '../../../../components/commons/Section'

const SentSvg = ({ ...props }) => (
  <svg {...props} viewBox="0 0 488.878 488.878">
    <g>
      <g>
        <polygon fill="currentColor" points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306     144.423,442.58 488.878,98.123 437.055,46.298   " />
      </g>
    </g>
  </svg>
)

/* Animation */
const spinMove = keyframes`
  0% {
    transform: rotate(0deg) translate(0) scale(1);
  }
  100% {
    transform: rotate(-5deg) translate(100px, -100px) scale(2);
  }
`

const opacity = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`


export const SectionStyled = styled(Section)`
  padding: 40px 0;
  margin: 30px 0;
`

export const Content = styled.div`
  text-align: justify;
`

export const SubmitBtn = styled(Button)`
  position: absolute;
  bottom: 25px;
  outline: none;
  
  > svg {
    width: 20px;
    margin-left: 10px;
    &:first-child {
    ${({ formStatus }) => {
    console.log('STYLE DU SVG EN FONCTION DU STATUS')
    console.log(formStatus)
    let rule = null
    if (formStatus === FORM_STATUS.SENDING) {
      rule = css`
          animation: ${spinMove} 800ms cubic-bezier(0.23, 1, 0.32, 1) forwards,
          ${opacity} 800ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
        `
    } else if (formStatus === FORM_STATUS.SENT) {
      rule = css`opacity: 0`
    }

    return rule
  }}
    }
  }
`

export const SendingLoader = styled(MDSpinner)`
  position:absolute!important;
  right: 40px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity .6s ease-in-out;
 
`

export const SentIcon = styled(SentSvg)`
  margin-top: -2px;
  position: absolute;
  right: 40px;
  
  polygon {
    transform: translateX(${({ active }) => (active ? 0 : '100%')});
    transition: transform .3s ease-in-out;
  }
`
