/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

export const ParallaxPage = ({ sx, ...rest }) => {
  return <ParallaxLayer sx={sx} {...rest} />
}
