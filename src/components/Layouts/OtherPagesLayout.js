import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../Navigation'

const OtherPagesLayout = ({ children, ...rest }) => {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  )
}

const OtherPagesLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <OtherPagesLayout>
          <Component {...matchProps} />
        </OtherPagesLayout>
      )}
    />
  )
}

export default OtherPagesLayoutRoute
