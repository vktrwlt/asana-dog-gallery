import React from 'react'
import styled from '@emotion/styled'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>
}

export default Grid
