import React from 'react'
import { css, Global } from '@emotion/react'

const styles = css`
  body {
    margin: 0;
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-size: 18px;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  input {
    outline: none;
  }

  *, :after, :before {
    box-sizing: border-box;
  }
`

const GlobalCSS = () => {
  return (
    <Global styles={styles}/>
  )
}

export default GlobalCSS
