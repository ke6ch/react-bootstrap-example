import React, { useState } from 'react'
import Layout from '../components/Layout'
import Auth from '../components/Auth'

export default function Blog() {
  const [post, setPost] = useState([])
  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const url = `${process.env.REACT_APP_BASE_URL}/blog`
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    })

    if (response.status === 200) {
      const data = await response.json()
      setPost(data.list)
    }
  }

  return (
    <Layout>
      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      >
        Get blog posts
      </button>
      <button
        type="button"
        onClick={() => {
          setPost([])
        }}
      >
        clear
      </button>
      <ul>
        {post.map((p, idx) => (
          <li key={idx.toString()}>{p}</li>
        ))}
      </ul>
    </Layout>
  )
}
