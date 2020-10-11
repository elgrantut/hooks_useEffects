import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h6 className="text-primary my-3">{post.title}</h6>
    </div>
  )
}
