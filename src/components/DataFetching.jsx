import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [idFromButtonClick])

  return (
    <div>
      <h6 className="text-primary my-3">{post.title}</h6>
      <input
        className="form-control"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn btn-primary my-2" onClick={handleClick}>
        Fetch Post
      </button>
    </div>
  )
}
