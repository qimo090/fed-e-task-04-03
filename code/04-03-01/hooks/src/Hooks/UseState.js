import React, { useState } from 'react'

function HooksState (props) {
  const [count, setCount] = useState(() => props.count || 0)
  const [person, setPerson] = useState({ name: 'tom', age: 20 })
  const handleCount = () => {
    setCount(count => {
      document.title = count + 1
      return count + 1
    })
  }
  return (
    <div>
      <span>{count} {person.name} {person.age}</span>
      <button onClick={handleCount}>+ 1</button>
      <button onClick={() => setPerson({ ...person, name: 'jack' })}>setPerson
      </button>
    </div>
  )
}

export default HooksState
