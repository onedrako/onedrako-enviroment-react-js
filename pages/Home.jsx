import React from 'react'
import config from '../config'

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{config.api}</p>
    </>
  )
}

export { Home }
