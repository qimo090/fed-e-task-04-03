/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const base = css`
  color: yellow;
`

const danger = css`
  color: red;
  background-color: black;
`

const Composition = () => {
  return (
    <button css={[base, danger]}>button</button>
  )
}

export default Composition
