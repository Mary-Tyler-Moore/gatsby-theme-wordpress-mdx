import baseTheme from 'gatsby-theme-wordpress-mdx/src/gatsby-plugin-theme-ui'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      ...baseTheme.colors.modes,
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
      },
      purple: {
        ...baseTheme.colors.modes.purple,
        backgroundHeader: '#06050c',
        backgroundFeatures: 'linear-gradient(#06050c, #131127)',
        backgroundAbout: 'linear-gradient(#131127, #2e295e)',
        backgroundGeneral: 'linear-gradient(#2e295e, #423b87)',
        backgroundPost: 'linear-gradient(#423b87, #2e295e)',
        backgroundFooter: 'linear-gradient(#2e295e, #06050c)'
      },
      bulma: {
        textSecondary: 'text',
        black: 'hsl(0, 0%, 4%)',
        blackBis: 'hsl(0, 0%, 7%)',
        blackTer: 'hsl(0, 0%, 14%)',
        greyDarker: 'hsl(0, 0%, 21%)',
        greyDark: 'hsl(0, 0%, 29%)',
        grey: 'hsl(0, 0%, 48%)',
        greyLight: 'hsl(0, 0%, 71%)',
        greyLighter: 'hsl(0, 0%, 86%)',
        whiteTer: 'hsl(0, 0%, 96%)',
        whiteBis: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        orange: 'hsl(14,  100%, 53%)',
        yellow: 'hsl(48,  100%, 67%)',
        green: 'hsl(141, 71%,  48%)',
        turquoise: 'hsl(171, 100%, 41%)',
        cyan: 'hsl(204, 86%,  53%)',
        blue: 'hsl(217, 71%,  53%)',
        purple: 'hsl(271, 100%, 71%)',
        red: 'hsl(348, 100%, 61%)',
        text: 'hsl(0, 0%, 29%)',
        background: 'hsl(0, 0%, 100%)',
        primary: 'hsl(217, 71%,  53%)',
        muted: 'hsl(0, 0%, 96%)',
        info: 'hsl(204, 86%,  53%)',
        success: 'hsl(141, 71%,  48%)',
        warning: 'hsl(48,  100%, 67%)',
        danger: 'hsl(348, 100%, 61%)',
        light: 'hsl(0, 0%, 96%)',
        dark: 'hsl(0, 0%, 21%)',
        backgroundHeader: () => this.background,
        backgroundFeatures: () => this.background,
        backgroundAbout: () => this.background,
        backgroundFooter: () => this.background,
        backgroundGeneral: () => this.background,
        backgroundPost: () => this.background,
        backgroundNavBar: 'primary',
        backgroundSideBar: 'primary',
        activeTextBar: 'text',
        textBar: 'text'
      }
    }
  },
  logo: {
    width: '4em'
  }
}
