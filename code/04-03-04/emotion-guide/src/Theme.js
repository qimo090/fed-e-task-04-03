/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const getPrimaryColor = props => css`
  color: ${props.colors.primary};
  font-size: 20px;
`

const Theme = () => {
  console.log(useTheme()) // { colors: { primary: 'tomato' } }
  return (
    <div css={getPrimaryColor}>theme</div>
  )
}

export default Theme
