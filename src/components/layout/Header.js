import React from 'react'

export default function Header() {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }

  return (
    <header style={headerStyle}>
        <h1>Todo list</h1>
    </header>
  )
}
