import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
