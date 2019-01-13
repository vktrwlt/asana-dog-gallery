import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import styled from '@emotion/styled'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 10%;
`
const Main = styled.main`
  margin-bottom: auto;

  width: 100%;
  max-width: 1200px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <FlexContainer>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </FlexContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
