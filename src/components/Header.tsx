import React from 'react'
import { Navbar } from 'react-bootstrap'
import LogoutButton from './LogoutButton'
import Auth from './Auth'

export default function Header() {
  return (
    <header>
      <Navbar className="bg-light justify-content-between">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        {Auth.isLogined() === true ? <LogoutButton /> : ''}
      </Navbar>
    </header>
  )
}
