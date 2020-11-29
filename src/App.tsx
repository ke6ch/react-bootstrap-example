import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './pages/Index'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="/blog" component={Blog} />
      </Router>
    </div>
  )
}
