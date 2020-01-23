/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Header } from './Header'

export const HeaderContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query headerQuery {
        site {
          siteMetadata {
            config {
              headerHeight
              sideBarWidth
              showToggle
            }
          }
        }
        allMdxWpPages(sort: { order: ASC, fields: title }) {
          edges {
            node {
              type
              id
              title
              wpData {
                slug
                title
              }
              mdxData {
                fields {
                  slug
                }
                frontmatter {
                  title
                  icon
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { config } = data.site.siteMetadata
      const links = data.allMdxWpPages.edges.map(({ node: page }) => {
        if (page.type === 'WP') {
          const { wpData } = page
          return {
            slug: wpData.slug,
            icon: null,
            title: page.title
          }
        } else {
          const { mdxData } = page
          return {
            slug: mdxData.fields.slug,
            icon: mdxData.frontmatter.icon,
            title: page.title
          }
        }
      })
      return (
        <Header config={config} links={links}>
          {children}
        </Header>
      )
    }}
  />
)
