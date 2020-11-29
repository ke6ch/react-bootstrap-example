import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Alert from '../components/AlertMessage'

export default function Index() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const history = useHistory()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (email === '' || password === '') {
      setShow(true)
    } else {
      fetch(`${process.env.REACT_APP_BASE_URL}/login`)
        .then((res) => res.json())
        .then((data) =>
          data.language === 'python' ? history.push('/blog') : setShow(true)
        )
        .catch(() => setShow(true))
    }
  }

  return (
    <Layout>
      <div className="form-signin-wrapper d-flex flex-column justify-content-center align-items-center">
        <Alert
          message="Incorrect username or password."
          show={show}
          setShow={setShow}
        />
        <Login
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
