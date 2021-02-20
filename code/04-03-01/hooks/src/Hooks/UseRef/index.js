import React, { useRef } from 'react'

const HooksRef = () => {
  const username = useRef()
  const handler = () => console.log(username)
  return (
    <input type="text" ref={username} onChange={handler}/>
  )
}

export default HooksRef
