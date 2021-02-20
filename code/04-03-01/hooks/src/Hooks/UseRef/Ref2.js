import React, { useState, useEffect, useRef } from 'react'

const Ref2 = () => {
  const [count, setCount] = useState(0)
  let timerId = useRef()
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(timerId.current)
  }, [])

  const stopCount = () => {
    console.log('timerId', timerId)
    clearInterval(timerId.current)
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={stopCount}>Stop</button>
    </div>
  )
}

export default Ref2
