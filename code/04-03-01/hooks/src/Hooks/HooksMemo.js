import React, { useState, useMemo } from 'react'

const HooksMemo = () => {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)
  const result = useMemo(() => {
    console.log(111)
    return count * 2
  }, [count])
  return (
    <div>
      <h4>useMemo</h4>
      <span> {count} {result} </span>
      <span> {bool ? 'true' : 'false'} </span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setBool(!bool)}>ChangeBool</button>
    </div>
  )
}

export default HooksMemo
