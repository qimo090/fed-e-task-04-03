import React, { useState, memo, useCallback } from 'react'

const HooksCallback = () => {
  const [count, setCount] = useState(0)
  const resetCount = useCallback(() => setCount(0), [setCount])
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Foo resetCount={resetCount}/>
    </div>
  )
}

const Foo = memo(
  function Foo ({ resetCount }) {
    console.log('Foo组件重新渲染了')
    return (
      <div>
        我是Foo组件
        <button onClick={resetCount}>ResetCount</button>
      </div>
    )
  },
)

export default HooksCallback
