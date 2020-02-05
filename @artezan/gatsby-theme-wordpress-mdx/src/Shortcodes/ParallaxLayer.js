/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

export const ParallaxPage = ({ style, ...rest }) => {
  return <ParallaxLayer css={css({ ...style })} {...rest} />
}
