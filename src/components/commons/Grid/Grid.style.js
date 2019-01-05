import styled from 'styled-components'

export const Grd = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(${props => (props.cols.xs ? props.cols.xs : 1)}, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => (props.cols.sm ? props.cols.sm : 1)}, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(${props => (props.cols.md ? props.cols.md : 1)}, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${props => (props.cols.lg ? props.cols.lg : 1)}, 1fr);
  }
`
