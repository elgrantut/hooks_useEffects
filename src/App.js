import React from 'react'
import DataFetching from './components/DataFetching'
import './styles.css'

export default function App() {
  return (
    <div className="container m-5">
      <h1 className="text-primary display-4">Hello World</h1>
      <DataFetching />
    </div>
  )
}
