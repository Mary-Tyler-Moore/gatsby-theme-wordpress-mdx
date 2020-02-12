<p align="center">
    <img width='200px' alt="Gatsby Theme" src="./dn.png" />
  
</p>
<h1 align="center">
  @artezan/gatsby-theme-wordpress-mdx
</h1>

<p align="center">
  <a href="https://github.com/artezan/gatsby-theme-wordpress-mdx/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@artezan/gatsby-theme-wordpress-mdx is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@artezan/gatsby-theme-wordpress-mdx">
    <img src="https://img.shields.io/npm/v/@artezan/gatsby-theme-wordpress-mdx.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@artezan/gatsby-theme-wordpress-mdx?minimal=true">
    <img src="https://img.shields.io/npm/dm/@artezan/gatsby-theme-wordpress-mdx.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@artezan/gatsby-theme-wordpress-mdx?minimal=true">
    <img src="https://img.shields.io/npm/dt/@artezan/gatsby-theme-wordpress-mdx.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=CArtezan">
      <img src="https://img.shields.io/twitter/follow/CArtezan.svg?label=Follow%20@CArtezan" alt="Follow @CArtezan" />
    </a>
</p>

This Plugin is a union of two worlds 🌓 the old WordPress and the new MDX. You can use WP, MDX or both

## Demo

- [Live Preview](https://artezan-blog.netlify.com/)

- [Source Code](https://github.com/artezan/gatsby-theme-wordpress-mdx).

## Features

- Theme UI-based theming
- react-animated-css
- MDX source
- WP source

## Installation

```sh
npm install @artezan/gatsby-theme-wordpress-mdx
```

### Install as a starter

This will generate a new site (with the folder name "cara") that pre-configures use of the theme including example content and additional plugins.

```sh
gatsby new WpMdx artezan/gatsby-theme-wordpress-mdx
```

[**View the starter's code**](https://github.com/artezan/gatsby-theme-wordpress-mdx/tree/master/demo)

## Usage

### Theme options ⚙️

| Keys              | Child Keys        | Type      | Required | Description                                                                                                        |
| ----------------- | ----------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `sourceWordpress` |                   | Obj       | True ✅  | Turn on/off the source of page or post of WP                                                                       |
|                   | `sourcePost`      | Boolean   | False    | `true` if you want to use wp post source, requires `gatsby-source-wordpress`                                       |
|                   | `sourcePage`      |           | False    | `true` if you, want to use wp page source, requires `gatsby-source-wordpress`                                      |
| `sourceMdxPosts`  |                   | Boolean   | True ✅  | `true` if you, want to use mdx post source                                                                         |
| `headerHeight`    |                   | Number    | False    | px of the header bar, default 64 px                                                                                |
| `sideBarWidth`    |                   | Number    | False    | px of the side bar, default 240 px                                                                                 |
| `navButtonTheme`  |                   | Obj       | Flase    | This key is for the btn that change the colors modes of the themes [Color modes](https://theme-ui.com/color-modes) |
|                   | `showButtonTheme` | Boolean   | False    | Show the btn                                                                                                       |
|                   | `text`            | String    | False    | Text inside the btn, otherwise it will show the name of the theme                                                  |
|                   | `colorsModes`     | String[ ] | False    | This Array contains the posible themes, otherwise it will show all the themes                                      |
| `colorModes`      |                   | Obj       | False    | Use this obj if you want to set as default a specific theme                                                        |
|                   | `default`         | String    | False    | Name of the theme                                                                                                  |
| `logo`            |                   | String    | False    | This path is relative to the root of the site. And show the logo in the header bar                                 |

#### Example usage 🔎

```js
// gatsby-config.js

resolve: 'gatsby-theme-wordpress-mdx',
options:
{
    // Requiered
    sourceWordpress: {
      sourcePost: true,
      sourcePage: true,
    },
    // Requiered
    sourceMdxPosts: true,
    // config optional
    headerHeight: 64,
    sideBarWidth: 240,
    navButtonTheme: {
      showButtonTheme: true
      text: 'Change',
      colorsModes: ['deep', 'purple']
    },
    colorModes: {
      default: 'gray'
    },
    logo: `src/images/logo.svg` // This path is relative to the root of the site.
  }

```

#### Additional configuration ⚙️

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "MDX WP",
    description: "It is a WP with MDX blog ",
    keywords: ["GatsbyJs", "React", "theme-ui"],
    siteURL: "http://artezan-blog.netlify.com",
    // Used for og:image and must be placed inside the `static` folder
    siteImage: "/preview.png"
  }
};
```

### Extending Themes and Colors 🦄

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) and [Extending a theme](https://theme-ui.com/packages/gatsby-plugin#extending-a-theme) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@artezan/gatsby-theme-wordpress-mdx/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

#### Colors Helpers

In `src/gatsby-plugin-theme-ui/index.js` this is the basic colors keys

```js
colors: {
   text: '#ffffff',
    textSecondary: '#ccd0d6',
    textMuted: '#667284',
    primary: '#04d0d9',
    secondary: '#FBF8EF',
    muted: '#262c35',
    background: '#353e4a',
}
```

For advance options

```js
colors: {
   text: '#ffffff',
    textSecondary: '#ccd0d6',
    textMuted: '#667284',
    primary: '#04d0d9',
    secondary: '#FBF8EF',
    muted: '#262c35',
    background: '#353e4a',
    // box-shadow for imgon landing
    imgShadow: '11px 7px 20px 12px rgb(0, 0, 0)',
    // box-shadow for all the cards
    shadowCard: '',
    // background-color for the navbar
    backgroundNavBar: 'background',
    //background-color for side bar
    backgroundSideBar: 'background',
    // color for active item
    activeTextBar: 'secondary',
    // color for items on side and header bar
    textBar: 'primary',
    // border for cards
    borderRadiusCard: 1,
    // background-color for cards
    backgroundCard: 'muted',
    // :hover for cards
    hoverCard: {
      filter: 'brightness(105%)'
    },
    // :focus for Link
    onClickLink: {},
    // :focus for cards
    onClickCard: { filter: 'brightness(105%)' }
    }
```

### Folder Structure 📁

- `src/index.mdx` is required, in this file you can generate the landing page
- `src/page` is without "s" because mdx plugin

```
Root
│   README.md
│   gatsby-config.js
└───src
│   └───gatsby-plugin-theme-ui
│   │   │ index.js
│   └───post
│   │   │ mdx files
│   └───page
│   │   │ mdx files
│   └───images
│   │   │ png jpg svg files
│   │ index.mdx
│
└───static
    │   file021.png
    │   favicon.ico
```

### Editing the content 🗒️

In `src/index.mdx` must have at least:

```md
---
title: index
layout: landing
---

Your landing page here
```

Not matter what kind of file, you can add a Fluid IMG in the front matter like this:

```md
---
nameImage: about-image1.jpg
---## Title
```

And then acces to the imagen with `props.imagesFluid['about-image1.jpg']`

or

```md
---
nameImage: [about-image1.jpg, about-image2.jpg]
---## Title
```

And then acces to the imagen with `props.imagesFluid['about-image2.jpg']` `props.imagesFluid['about-image1.jpg']`

#### General Variable

Inside `src/index.mdx` you can access to this variable:

- `props.imagesFluid` Array of IMG in the front matter imagesFluid[nameImg.png]
- `props.context` Contex of Theme ui see [context](https://theme-ui.com/api#context)
- `props.colorMode` [Color Mode](https://theme-ui.com/api#usecolormode)
- `props.setColorMode` [Set Color](https://theme-ui.com/color-modes#setting-the-color-mode)
- `props.allMdxWpPosts` Array of all post
- `props.allMdxWpPages` Array of all Pages

### Short Codes

- All the short codes have the `sx` prop for styles see [sx-prop](https://theme-ui.com/sx-prop/)

| Code                                         |       props       |                                                                                             description |
| -------------------------------------------- | :---------------: | ------------------------------------------------------------------------------------------------------: |
| `<AboutLayout />`                            |                   |                                                                                Layout for about section |
|                                              |        sx         |                                                                                                   style |
|                                              |  aboutImageFluid  |                                                                                               Fluid Img |
| `<AllPosts />`                               |                   |                                                                  Returns a list of cards with all posts |
|                                              |    numOfPosts     |                                                                              number of the post to show |
|                                              |   showSearchBar   |                                                                   Show a search bar that filter by tags |
| `<BgImage />`                                |                   | For more info see (gatsby-background-image)[https://www.gatsbyjs.org/packages/gatsby-background-image/] |
| `<ButtonTheme /> | | Change the colors modes |
|                                              |      themes       |                                      Array of the posible themes, if it dont set returns all the themes |
|                                              |     Children      |                             Text of the btn, otherwise the txt of the btn will be the name of the theme |
| `<ContainerWrapper />`                       |                   |                                                                                Container with max-width |
| FeaturesWrapper                              |                   |                                                                             Flex container for features |
| `<FeatureLayout />`                          |                   |                     Layout for feature sections, this will show a img on the top and text on the bottom |
|                                              | featureImageFluid |                                                                                   Fluid img for feature |
| `<ImgGatsby />`                              |                   |                                                                           Short code for `gatsby-image` |
| `<Div />`                                    |                   |                                                                                 `div` tag with sx props |
| `<SocialLink />`                             |                   |                             Generate a btn icon that redirect to a social link (facebook, twitter, etc) |
|                                              |                   |                                                                                                         |
