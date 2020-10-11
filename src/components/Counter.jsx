import React, { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div className="container-fluid m-5">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  )
}
