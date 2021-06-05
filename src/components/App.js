import React, { useState } from 'react'
import './App.css'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

const App = () => {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  return (
    (name === '' && config.signInEnabled) ?
      <SignIn setName={setName} setWeight={setWeight} />
      : <Main name={name} weight={weight} />
  )
}

export default App
