import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
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
      showDog: this.props.data.allImageSharp.edges[index],
      dogIndex: index,
      dogPrevIndex: index - 1,
      dogNextIndex: index + 1,
    })

    // remove scrolling if modal is active
    if (this.state.modalActive) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
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
      showDog: this.props.data.allImageSharp.edges[newIndex],
      dogIndex: newIndex,
      dogPrevIndex: newIndex - 1,
      dogNextIndex: newIndex + 1,
    })
  }

  render() {
    return (
      <Layout>
        <Seo
          title="Puppy Image Gallery"
          keywords={[`asana`, `pet adoption`, `dog`, `puppy`]}
        />
        <Grid>
          {this.props.data.allImageSharp.edges.map((dog, index) => {
            return (
              <DogCard
                dog={dog.node.fixed}
                key={dog.node.id}
                index={index}
                toggleModal={this.toggleModal}
              />
            )
          })}
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

export const dogThumnbnails = graphql`
  query dogThumbnails {
    allImageSharp {
      edges {
        node {
          id
          fixed(height: 350, width: 350) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`
