import React, { useState } from 'react'
import './App.css'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

const App = () => {

  // for test value
  const initialName = 'Guest'
  const initialWeight = 70

  const [name, setName] = useState(initialName)
  const [bodyWeight, setBodyWeight] = useState(initialWeight)
  return (
    (name === '' && config.signInEnabled) ?
      <SignIn setName={setName} setBodyWeight={setBodyWeight} />
      : <Main name={name} bodyWeight={bodyWeight} />
  )
}

export default App
