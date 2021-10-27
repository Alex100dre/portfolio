import styled from 'styled-components'

export const Chp = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 1;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.16);
  color: #fff;
  border-radius: 16px;
  white-space: nowrap;
  cursor: default;
  outline: 0;
  text-decoration: none;
  padding: 5px 10px 5px 25px;
  
  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Icon = styled.div`
  background: url(${(({source}) => source)}) no-repeat center;
  position: absolute;
  background-size: cover;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  top: 4px;
  left: 4px;
`;
