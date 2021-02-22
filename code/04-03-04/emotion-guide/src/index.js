import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: 'tomato',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

