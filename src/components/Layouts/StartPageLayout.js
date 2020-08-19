import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavigationStartPage from '../NavigationStartPage'

const StartPageLayout = ({ children }) => (
  <div>
    <NavigationStartPage />
  </div>
)

const StartPageLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <StartPageLayout>
          <Component {...matchProps} />
        </StartPageLayout>
      )}
    />
  )
}

export default StartPageLayoutRoute
