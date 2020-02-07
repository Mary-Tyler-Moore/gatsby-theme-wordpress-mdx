/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Icon } from '../Icon'

export const SideBarNavItem = ({ icon, title, isActive }) => (
  <Styled.div
    sx={{
      color: theme =>
        isActive ? theme.colors.activeTextBar : theme.colors.textBar,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: isActive ? 'muted' : 'transparent',
      borderRadius: 2,
      textTransform: 'capitalize',
      pt: 3,
      pb: 3,
      pl: 4,
      pr: 4,
      transition: '.2s linear background-color, .2s linear color',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: theme => theme.fontWeights.body,
      lineHeight: 'normal',
      textDecoration: 'none',
      outline: 'none',
      svg: {
        marginRight: 2
      },

      ':hover': {
        color: theme => theme.colors.activeTextBar,
        backgroundColor: 'muted'
      }
    }}
  >
    {/* {icon && <Icon iconPath={icon} />} */}
    {title}
  </Styled.div>
)
