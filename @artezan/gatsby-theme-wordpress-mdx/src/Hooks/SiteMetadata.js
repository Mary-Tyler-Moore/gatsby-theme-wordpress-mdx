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
            twitter
            github
            config {
              headerHeight
              sideBarWidth
              showToggle
              multipleBackground
              logo
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
