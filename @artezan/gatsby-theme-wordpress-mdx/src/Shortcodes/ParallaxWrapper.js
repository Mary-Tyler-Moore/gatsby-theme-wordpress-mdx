/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

export const ParallaxWrapper = ({ sx, ...rest }) => {
  return <Parallax sx={sx} {...rest} />
}
