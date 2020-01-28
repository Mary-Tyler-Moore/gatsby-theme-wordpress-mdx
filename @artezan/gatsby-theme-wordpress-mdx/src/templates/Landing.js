/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, Flex, Box, Styled, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { HeaderComponent } from '../components/sections/Header/HeaderComponent'
import { FeatureComponent } from '../components/sections/Features/FeatureComponent'
import { Content, ContentContainer } from '../components/Content'
import { AboutSection } from '../components/sections/About/AboutSection'
import { FooterSection } from '../components/sections/Footer/FooterSection'
import { GeneralSection } from '../components/sections/GeneralSection/GeneralSection'
import {
  MixPostsContainer,
  WpPostsContainer,
  MdxPostsContainer
} from '../components/AllPosts'
import { LastedPosts } from '../components/sections/LastedPosts/LastedPosts'
import { ParallaxLayer, Parallax } from 'react-spring/renderprops-addons.cjs'

const convertArrayToObject = array =>
  array.reduce(
    (obj, item) => ((obj[item.fluid.originalName] = item.fluid), obj),
    {}
  )

const Landing = ({
  data: {
    mdx: {
      body,
      frontmatter: { sections: sectionsOrder }
    },
    site: {
      siteMetadata: { config }
    },
    allImageSharp: { nodes: images }
  }
}) => {
  let imagesFluid = {}
  if (images && images.length) {
    imagesFluid = convertArrayToObject(images)
  }
  const context = useThemeUI()
  // Sort sections
  /* const [sortSecctions, setSortSecctions] = useState([])
  useEffect(() => {
    setSortSecctions(
      sections
        .reduce(
          (acc, current) => {
            if (
              current.frontmatter &&
              current.frontmatter.section.toLowerCase() === 'features'
            ) {
              acc[0].featureGroup.push(current)
            } else {
              acc.push(current)
            }
            return acc
          },
          [{ featureGroup: [], frontmatter: { section: 'features' } }]
        )
        .sort((a, b) => {
          return (
            sectionsOrder.indexOf(a.frontmatter.section) -
            sectionsOrder.indexOf(b.frontmatter.section)
          )
        })
    )
  }, [sections]) */
  /*  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height original 256px
        minHeight: '100vh'
      }}
    >
      <main>
        {sortSecctions.map((sectionComp, index) => (
          <section key={index}>
            {sectionComp.frontmatter.section.toLowerCase() === 'header' && (
              <HeaderComponent {...sectionComp}></HeaderComponent>
            )}

            {sectionComp.frontmatter.section.toLowerCase() === 'features' && (
              <Content config={siteMetadata.config} bg={`backgroundFeatures`}>
                <FeatureComponent
                  features={[...sectionComp.featureGroup]}
                ></FeatureComponent>
              </Content>
            )}
            {console.log(sectionComp.frontmatter.section.toLowerCase())}
            {sectionComp.frontmatter.section.toLowerCase() === 'about' && (
              <Content config={siteMetadata.config} bg={`backgroundAbout`}>
                <AboutSection {...sectionComp}></AboutSection>
              </Content>
            )}
            {sectionComp.frontmatter.section.toLowerCase() === 'footer' && (
              <Content
                style={{
                  marginTop: '2%'
                }}
                config={siteMetadata.config}
                bg={`backgroundFooter`}
              >
                <FooterSection {...sectionComp}></FooterSection>
              </Content>
            )}
            {sectionComp.frontmatter.section.toLowerCase() === 'general' && (
              <Content config={siteMetadata.config} bg={`backgroundGeneral`}>
                <GeneralSection {...sectionComp}></GeneralSection>
              </Content>
            )}
            {sectionComp.frontmatter.section.toLowerCase() ===
              'lastedposts' && (
              <Content config={siteMetadata.config} bg={`backgroundPost`}>
                <LastedPosts {...sectionComp} />
              </Content>
            )}
          </section>
        ))}
      </main>
    </div>
  ) */
  return (
    <Styled.div sx={{}}>
      <MDXRenderer imagesFluid={imagesFluid} context={context}>
        {body}
      </MDXRenderer>
    </Styled.div>
  )
}

export const contentQuery = graphql`
  query landingQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
        config {
          multipleBackground
          headerHeight
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        sections
      }
    }
    allImageSharp {
      nodes {
        fluid(maxWidth: 800) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Landing
