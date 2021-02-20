import React, { createContext, useContext } from 'react'

const CountContext = createContext(100)

function HooksContext (props) {
  return (
    <CountContext.Provider value={100}>
      <Foo/>
    </CountContext.Provider>
  )
}

function Foo () {
  const value = useContext(CountContext)
  return (
    <div>{value}</div>
  )
}

export default HooksContext
