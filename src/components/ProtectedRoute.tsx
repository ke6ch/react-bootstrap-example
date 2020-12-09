import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

export default function ProtectedRoute({ exact, path, component }: RouteProps) {
  return !localStorage.getItem('token') ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Route exact={exact} path={path} component={component} />
  )
}
