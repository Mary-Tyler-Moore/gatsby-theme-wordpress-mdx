import baseTheme from 'gatsby-theme-wordpress-mdx/src/gatsby-plugin-theme-ui'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    backgroundHeader: '#06050c',
    backgroundFeatures: 'linear-gradient(#06050c, #131127)',
    backgroundAbout: 'linear-gradient(#131127, #2e295e)',
    backgroundGeneral: 'linear-gradient(#2e295e, #423b87)',
    backgroundPost: 'linear-gradient(#423b87, #2e295e)',
    backgroundFooter: 'linear-gradient(#2e295e, #06050c)',
    modes: {
      light: {
        ...baseTheme.colors.modes.light,
        primary: '#2b62d6',
        backgroundHeader: 'linear-gradient(#f0f4fc, #f0f4fc)',
        backgroundFeatures: 'linear-gradient(#f0f4fc, #d0dcf6)',
        backgroundAbout: 'linear-gradient(#d0dcf6, #9eb7ec)',
        backgroundFooter: 'linear-gradient(#9eb7ec, #d0dcf6)',
        backgroundPost: 'linear-gradient(#d0dcf6, #f0f4fc)'
      }
    }
  },
  logo: {
    width: '4em'
  }
}
