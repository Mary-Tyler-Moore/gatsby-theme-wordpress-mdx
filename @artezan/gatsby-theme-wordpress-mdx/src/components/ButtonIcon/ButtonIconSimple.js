/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../Icon'

export const ButtonIconSimple = ({ iconPath, ...rest }) => {
  return (
    <button
      {...rest}
      sx={{
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'background',
        backgroundColor: 'primary',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        p: 0,
        border: 0
      }}
    >
      <Icon iconPath={iconPath} />
    </button>
  )
}
