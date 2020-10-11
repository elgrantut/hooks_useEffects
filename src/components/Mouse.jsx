import React, { useState, useEffect } from 'react'

export default function Mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const logMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)
    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div className="container-fluid m-5">
      <p>
        Mouse: x - {x} / y - {y}
      </p>
    </div>
  )
}
