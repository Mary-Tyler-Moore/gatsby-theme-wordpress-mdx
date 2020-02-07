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
        backgroundHeader: 'hsl(10, 10%, 98%)',
        backgroundFeatures: 'hsl(10, 10%, 98%)',
        backgroundAbout: 'hsl(10, 10%, 98%)',
        backgroundFooter: 'hsl(10, 10%, 98%)',
        backgroundGeneral: 'hsl(10, 10%, 98%)',
        backgroundPost: 'hsl(10, 10%, 98%)'
      },
      deep: {
        ...baseTheme.colors.modes.deep,
        backgroundHeader: 'hsl(230, 25%, 18%)',
        backgroundFeatures: 'hsl(230, 25%, 18%)',
        backgroundAbout: 'hsl(230, 25%, 18%)',
        backgroundFooter: 'hsl(230, 25%, 18%)',
        backgroundGeneral: 'hsl(230, 25%, 18%)',
        backgroundPost: 'hsl(230, 25%, 18%)'
      },
      swiss: {
        ...baseTheme.colors.modes.swiss,
        backgroundHeader: '#F7F7F7',
        backgroundFeatures: '#F7F7F7',
        backgroundAbout: '#F7F7F7',
        backgroundFooter: '#F7F7F7',
        backgroundGeneral: '#F7F7F7',
        backgroundPost: '#F7F7F7'
      }
    }
  },
  logo: {
    width: '4em'
  }
}
