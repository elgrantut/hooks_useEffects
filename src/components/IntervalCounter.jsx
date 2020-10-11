import React, { useEffect, useState } from 'react'

export default function IntervalCounter() {
  const [count, setCount] = useState(0)
  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="container-fluid">
      <h1 className="text-primary display-4">{count}</h1>
    </div>
  )
}
