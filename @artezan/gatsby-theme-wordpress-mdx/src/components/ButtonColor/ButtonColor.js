/** @jsx jsx */
import * as React from 'react'
import { useColorMode, jsx, Styled } from 'theme-ui'

export const ButtonColor = () => {
  const [colorMode, setColorMode] = useColorMode()

  const [nameTheme, setNameTheme] = React.useState('')

  React.useEffect(() => {
    setNameTheme(colorMode)
  }, [colorMode])

  const handleKeyPress = e => {
    console.log('here')
    let name = colorMode
    switch (name) {
      case 'dark':
        name = 'light'
        break
      case 'light':
        name = 'deep'
        break
      case 'deep':
        name = 'swiss'
        break
      case 'swiss':
        name = 'dark'
        break

      default:
        name = 'dark'
        break
    }
    console.log('here', name)
    setNameTheme(name)
    setColorMode(name)
  }

  return (
    <Styled.div
      sx={{
        display: 'flex',
        alignItems: 'center',
        ml: 3
      }}
    >
      <button
        onClick={e => handleKeyPress(e)}
        sx={{
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          fontWeight: 'bold',
          m: 0,
          px: 1,
          py: 1,
          border: 0,
          borderRadius: 4,
          // pass variant prop to sx
          variant: 'buttons.primary',
          bg: 'primary',
          color: 'background'
        }}
      >
        {nameTheme}
      </button>
    </Styled.div>
  )
}
