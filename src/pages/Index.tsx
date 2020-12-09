import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

export default function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Index.tsx</code> and save to reload.
        </p>
        <Link to="/login">Go to Login Page</Link>
      </header>
    </div>
  )
}
