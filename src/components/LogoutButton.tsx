import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Auth from './Auth'

export default function LogoutButton() {
  const history = useHistory()
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    Auth.logout()
    history.push('/login')
  }

  return (
    <Button
      type="button"
      variant="primary"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
      Logout
    </Button>
  )
}
