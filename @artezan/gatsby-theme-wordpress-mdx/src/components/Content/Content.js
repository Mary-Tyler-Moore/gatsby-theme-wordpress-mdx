/** @jsx jsx */
import { jsx, Styled, useThemeUI, Container } from 'theme-ui'

const commonStyles = {
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
  // Special case to allow for Card <a> to have box-shadow focus state
  paddingTop: 2
}

export const Content = ({ children, config = {}, bg }) => {
  return (
    <Styled.div
      sx={{
        zIndex: '2',
        position: 'relative',
        overflow: 'hidden',
        transition: theme => theme.sideBarTranstion
      }}
    >
      <Container
        sx={{
          /* maxWidth: ['540px', '540px', '540px', '1024px'] */
          mt: 4
        }}
        p={4}
      >
        {children}
      </Container>
    </Styled.div>
  )
}
