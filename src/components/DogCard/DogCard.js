import React from 'react'
import styled from '@emotion/styled'
import { withPrefix } from 'gatsby'
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
`

const DogThumbnail = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => withPrefix(props.dog.image)});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const DogCard = ({ dog, index, toggleModal }) => {
  return (
    <Card onClick={() => toggleModal(index)}>
      <Wrapper>
        <DogThumbnail dog={dog} />
      </Wrapper>
    </Card>
  )
}

export default DogCard
