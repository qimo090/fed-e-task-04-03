import { css, Global } from '@emotion/react'

const styles = css`
  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: red;
  }
`

const GlobalCss = () => {
  return (
    <Global styles={styles}/>
  )
}

export default GlobalCss
