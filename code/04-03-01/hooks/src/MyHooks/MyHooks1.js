import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useGetPost () {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').
      then(response => setPost(response.data))
  }, [])
  return post
}

const MyHooks1 = () => {
  const post = useGetPost()
  return (
    <div>
      <h4>{post.title}</h4>
      <div>{post.body}</div>
    </div>
  )
}

export default MyHooks1
