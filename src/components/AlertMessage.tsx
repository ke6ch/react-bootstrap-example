import React from 'react'
import { Alert } from 'react-bootstrap'

interface Props {
  show: boolean
  setShow: (show: boolean) => void
  message: string
}

export default function AlertMessage(props: Props) {
  const { message, show, setShow } = props

  return (
    <Alert
      show={show}
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      {message}
    </Alert>
  )
}
