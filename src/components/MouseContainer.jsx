import React, { useState } from 'react'
import Mouse from './Mouse'

export default function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div className="container-fluid m-5">
      <button className="btn btn-primary" onClick={() => setDisplay(!display)}>
        Toggle Display
      </button>
      {display && <Mouse />}
    </div>
  )
}
