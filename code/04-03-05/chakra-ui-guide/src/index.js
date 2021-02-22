import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, theme } from '@chakra-ui/react'

// 1. 设置默认颜色模式
// theme.config.initialColorMode = 'dark'

// 2. 使用操作系统所使用的颜色模式
// theme.config.useSystemColorMode = true

ReactDOM.render(
  <ChakraProvider>
    <App/>
  </ChakraProvider>,
  document.getElementById('root'),
)
