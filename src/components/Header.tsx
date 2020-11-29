import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      </Navbar>
    </header>
  )
}
