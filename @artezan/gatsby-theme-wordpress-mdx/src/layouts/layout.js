/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import { jsx, Styled, css, useColorMode } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import { SideBarProvider } from '../components/SideBarContext'
import { Seo } from '../components/Seo'
import { HeaderContainer } from '../components/Header/HeaderContainer'
import { SideBarContainer } from '../components/SideBar'
import { LightPanel } from '../components/LightPanel'
import { formatPathname } from '../helpers'
import { MDXProvider } from '@mdx-js/react'
import * as Shortcodes from '../Shortcodes'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const shortcodes = { ...Shortcodes, ScrollAnimation }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteURL
          siteImage
          config {
            headerHeight
            colorModes {
              default
            }
          }
        }
      }
    }
  `)
  const {
    title,
    description,
    keywords,
    siteURL,
    siteImage,
    config
  } = data.site.siteMetadata
  const [colorMode, setColorMode] = useColorMode()
  if (config.colorModes.default !== '' && colorMode === 'dark') {
    setColorMode(config.colorModes.default)
  }
  return (
    <>
      <Styled.root>
        <Global
          styles={css({
            '*': {
              boxSizing: `inherit`,
              '&:before': {
                boxSizing: `inherit`
              },
              '&:after': {
                boxSizing: `inherit`
              }
            },
            body: {
              margin: 0,
              padding: 0,
              boxSizing: `border-box`,
              bg: 'background'
            },
            '::selection': {
              backgroundColor: `primary`,
              color: `white`
            }
          })}
        />
        <SideBarProvider>
          <Location>
            {({ location }) => {
              const { pathname } = location

              return (
                <>
                  <Seo
                    title={title}
                    titleTemplate={formatPathname(pathname)}
                    description={description}
                    keywords={keywords}
                    siteURL={siteURL}
                    image={siteImage}
                  />
                  <HeaderContainer />
                  <SideBarContainer />
                  <LightPanel />
                  <Styled.div sx={{ mt: `${config.headerHeight}px` }}>
                    <MDXProvider components={shortcodes}>
                      {children}
                    </MDXProvider>
                  </Styled.div>
                </>
              )
            }}
          </Location>
        </SideBarProvider>
      </Styled.root>
    </>
  )
}

export default Layout
