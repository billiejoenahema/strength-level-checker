import React, { useState } from 'react'
import './App.css'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

const App = () => {
  const [name, setName] = useState('')
  return (
    (name === '' && config.signInEnabled) ?
      <SignIn setName={setName} />
      : <Main name={name} />
  )
}

export default App
