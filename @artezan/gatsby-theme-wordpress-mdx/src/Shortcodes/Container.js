/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { ContentContainer } from '../components/Content'

export const ContainerWrapper = props => (
  <Styled.div {...props}>
    <ContentContainer {...props} />
  </Styled.div>
)
