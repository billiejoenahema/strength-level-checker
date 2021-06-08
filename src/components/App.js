import React, { useState } from 'react'
import './App.css'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

const App = () => {
  const [name, setName] = useState('Guest')
  const [bodyWeight, setBodyWeight] = useState('')
  return (
    (name === '' && config.signInEnabled) ?
      <SignIn setName={setName} setBodyWeight={setBodyWeight} />
      : <Main name={name} bodyWeight={bodyWeight} />
  )
}

export default App
