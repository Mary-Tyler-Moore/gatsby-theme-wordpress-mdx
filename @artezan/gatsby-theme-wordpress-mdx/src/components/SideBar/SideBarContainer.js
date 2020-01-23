/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import { SideBar } from './SideBar'

export const SideBarContainer = () => (
  <StaticQuery
    query={graphql`
      query pagesQuery {
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
        <Styled.div
          sx={{
            position: 'fixed',
            top: 0,
            height: '100%',
            display: 'flex',
            flexBasis: 'auto',
            flexDirection: 'column',
            flexShrink: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            minHeight: 0,
            minWidth: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            zIndex: 4
          }}
        >
          <SideBar config={config} links={links} />
        </Styled.div>
      )
    }}
  />
)
