import React, { Component } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import DogCard from '../components/DogCard/DogCard'
import { dogs } from '../data/dogs.json'
import Modal from '../components/UI/Modal/Modal'
import Grid from '../components/UI/Grid/Grid'

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
        break
      default:
        return null
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
        <SEO
          title="Puppy Image Gallery"
          keywords={[`asana`, `pet adoption`, `dog`, `puppy`]}
        />
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
