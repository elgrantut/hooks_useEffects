import React, { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div className="container-fluid m-5">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn btn-primary my-2"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
    </div>
  )
}
