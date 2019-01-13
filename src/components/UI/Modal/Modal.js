import React from 'react'
import styled from '@emotion/styled'
import { withPrefix } from 'gatsby'
import { FaTimes, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.4s ease;
`

const Backdrop = styled.div`
  background-color: #222;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.4s ease;
`

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 90vh;
  border-radius: 4px;
  user-select: none;
`
const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  svg {
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
  }
`
const ArrowWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${props => {
    if (props.direction === 'left') {
      return 'left'
    } else {
      return 'right'
    }
  }}: 1rem;

  svg {
    font-size: 3rem;
    color: white;
    cursor: pointer;
  }
`

const Modal = ({
  active,
  toggleModal,
  showDog,
  totalDogs,
  dogPrevIndex,
  dogNextIndex,
  dogCarousel,
}) => {
  let image = null

  if (showDog) {
    image = showDog ? showDog.node.fluid.originalImg : 'null'
  }
  // hide prev arrow if first dog or next arrow if last dog
  let showLeftArrow = null
  let showRightArrow = null

  if (dogPrevIndex === -1) {
    showLeftArrow = {
      display: 'none',
    }
  } else {
    showLeftArrow = {
      display: 'block',
    }
  }

  if (dogNextIndex === totalDogs) {
    showRightArrow = {
      display: 'none',
    }
  } else {
    showRightArrow = {
      display: 'block',
    }
  }

  return (
    <React.Fragment>
      <ModalContainer active={active}>
        <ArrowWrapper
          onClick={() => dogCarousel('prev')}
          direction="left"
          style={showLeftArrow}
        >
          <FaAngleLeft />
        </ArrowWrapper>
        <ArrowWrapper
          onClick={() => dogCarousel('next')}
          direction="right"
          style={showRightArrow}
        >
          <FaAngleRight />
        </ArrowWrapper>
        <IconWrapper onClick={() => toggleModal(false)}>
          <FaTimes />
        </IconWrapper>
        <ImgWrapper onClick={() => toggleModal(false)}>
          {showDog ? <Img src={withPrefix(image)} alt="dog" /> : null}
        </ImgWrapper>
      </ModalContainer>
      <Backdrop active={active} />
    </React.Fragment>
  )
}

export default Modal
