import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import Alert from '../components/AlertMessage'
import Auth from '../components/Auth'

export default function Login() {
  const [email, setEmail] = useState<string>('a@gmail.com')
  const [password, setPassword] = useState<string>('b')
  const [message, setMessage] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const history = useHistory()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const url = `${process.env.REACT_APP_BASE_URL}/login`
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    })

    if (response.status === 200) {
      const data = await response.json()
      Auth.login(data.access_token)
      history.push('/blog')
    } else {
      const data = await response.json()
      setMessage(data.errors.message)
      setShow(true)
    }
  }

  return (
    <Layout>
      <div className="form-signin-wrapper d-flex flex-column justify-content-center align-items-center">
        <Alert message={message} show={show} setShow={setShow} />
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  )
}
