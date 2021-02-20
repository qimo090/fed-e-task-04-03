import React, { useState } from 'react'

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value),
  }
}

const MyHooks2 = () => {
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')

  const submitForm = (event) => {
    event.preventDefault()
    console.log(usernameInput.value, passwordInput.value)
  }
  return (
    <form onSubmit={submitForm}>
      <input type="text" name="username" {...usernameInput}/>
      <input type="password" name="password" {...passwordInput}/>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default MyHooks2
