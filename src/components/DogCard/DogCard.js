import React from 'react'
import styled from '@emotion/styled'

import Img from 'gatsby-image'
const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  overflow: hidden;
  height: 350px;
  position: relative;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`

const DogCard = ({ dog, index, toggleModal }) => {
  return (
    <Card onClick={() => toggleModal(index)}>
      <Wrapper>
        <Img fixed={dog} style={{ width: '100%' }} />
      </Wrapper>
    </Card>
  )
}

export default DogCard
