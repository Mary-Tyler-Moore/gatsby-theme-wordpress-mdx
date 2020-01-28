/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'
import { ButtonIcon } from '../ButtonIcon'
import { SideBarContext } from '../SideBarContext'
import { SideBarNavList } from '../SideBarNavList'
import { SideBarContainer } from '../SideBar/SideBarContainer'
import { Link } from 'gatsby'
import ImageDynamic from '../ImgDynamic/ImgDynamic'

export const Header = ({ config, links }) => {
  const { headerHeight, showToggle, logo } = config
  const { state, dispatch } = React.useContext(SideBarContext)
  return (
    <header
      sx={{
        position: 'sticky',
        top: 0,
        borderBottomWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'surface',
        marginBottom: 2,
        color: 'text',
        backgroundColor: 'background',
        opacity: 0.85,
        paddingLeft: [3, 4],
        paddingRight: [3, 4],
        marginLeft: [0, 0, 0, 0],
        transition: theme => theme.sideBarTransition,
        zIndex: 3
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: `${headerHeight}px`
        }}
      >
        <Styled.div id="logo">
          <Link to={'/'}>
            {logo === '' ? (
              `Logo`
            ) : (
              <ImageDynamic
                sx={{
                  width: theme => theme.logo.width
                }}
                name={'logo'}
                filename={logo}
              />
            )}
          </Link>
          {/* <Logo /> */}
        </Styled.div>

        <Styled.div
          sx={{
            display: [
              `${state.isNavOpen ? 'none' : 'flex'}`,
              `${state.isNavOpen ? 'none' : 'flex'}`,
              `${state.isNavOpen ? 'none' : 'flex'}`,
              'none'
            ],
            justifyContent: 'flex-end',
            flexBasis: '100%'
          }}
        >
          <ButtonIcon
            onClick={() => dispatch({ type: 'openNav' })}
            iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Styled.div>
        <Styled.div
          sx={{
            display: ['none', 'none', 'none', 'flex'],
            justifyContent: 'flex-end',
            flexBasis: '100%',
            mt: [0, 0, 3]
          }}
        >
          {/* Pages */}
          <SideBarNavList links={links} />
          {/* Toggle */}
          {showToggle && (
            <ToggleSwitch toggleSwitchName="header-theme-toggle" />
          )}
        </Styled.div>
      </Styled.div>
    </header>
  )
}
