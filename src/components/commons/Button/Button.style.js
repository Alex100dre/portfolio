import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none !important;
  background-color: #040404;
  color: #3217BB !important;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  justify-content: center;
  padding: 16px 40px;
  height: 48px;
  text-align: center;
  white-space: nowrap;
  
  &:active {
    outline: 0;
  }
  
  &::before {
    border-radius: 2px;
  }
  
  &.shadow{
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0 8px 48px rgba(50,23,187,0.48);
      transition: box-shadow .15s ease;
    }
  }
  
  &.primary {
    color: #fff !important;
    transition: background .15s ease;
    background: linear-gradient(65deg, #3217BB 0, #4121E4 100%);
  }
`;
