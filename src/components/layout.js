/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import

import Header from './header'
import AppHeader from './AppHeader'

import './layout.css'

const Layout = ({ children, header }) => {
  return (
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
        <div
          style={{
            minHeight: '100vh',
          }}
        >
          {header && <Header siteTitle={data.site.siteMetadata.title} />}
          <AppHeader siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxHeight: '100vh',
              // maxWidth: 960,
              // padding: `0px 1.0875rem 1.45rem`,
              // paddingTop: 100,
            }}
          >
            <main>{children}</main>
            <footer
              style={{
                position: 'fixed',
                padding: 10,
                bottom: 0,
                left: 0,
              }}
            >
              {/* © {new Date().getFullYear()}, Startup Studios LLC. */}
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.defaultProps = {
  header: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
}

export default Layout
