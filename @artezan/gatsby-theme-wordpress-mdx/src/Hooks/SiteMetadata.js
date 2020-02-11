import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            keywords
            config {
              headerHeight
              sideBarWidth
              logo
              navButtonTheme {
                showButtonTheme
                text
                colorsModes
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
