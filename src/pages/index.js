import React, { Component } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import DogCard from '../components/DogCard/DogCard'
import styled from '@emotion/styled'
import { dogs } from '../data/dogs.json'
import Modal from '../components/UI/Modal/Modal'

const Grid = styled.div`
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

class IndexPage extends Component {
  state = {
    modalActive: false,
    showDog: null,
    dogIndex: null,
    dogPrevIndex: null,
    dogNextIndex: null,
  }

  toggleModal = index => {
    this.setState({
      modalActive: !this.state.modalActive,
      showDog: dogs[index],
      dogIndex: index,
      dogPrevIndex: index - 1,
      dogNextIndex: index + 1,
    })
  }
  // move to the next or previous dog img when you open the modal
  dogCarousel = direction => {
    let newIndex = null

    switch (direction) {
      case 'next':
        newIndex = this.state.dogNextIndex

        break
      case 'prev':
        newIndex = this.state.dogPrevIndex
    }
    this.setState({
      showDog: dogs[newIndex],
      dogIndex: newIndex,
      dogPrevIndex: newIndex - 1,
      dogNextIndex: newIndex + 1,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Grid>
          {dogs.map((dog, index) => (
            <DogCard
              dog={dog}
              key={index}
              index={index}
              toggleModal={this.toggleModal}
            />
          ))}
        </Grid>
        <Modal
          active={this.state.modalActive}
          toggleModal={this.toggleModal}
          showDog={this.state.showDog}
          dogCarousel={this.dogCarousel}
          dogPrevIndex={this.state.dogPrevIndex}
          dogNextIndex={this.state.dogNextIndex}
          totalDogs={dogs.length}
        />
      </Layout>
    )
  }
}

export default IndexPage
