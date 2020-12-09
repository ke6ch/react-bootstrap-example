import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Index from './pages/Index'
import Login from './pages/Login'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  )
}
