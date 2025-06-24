import { useState } from 'react'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import LoginForm from './components/LoginForm'
import UncontrolledInput from './components/UncontrolledInput'

const App = () => {

  return (
    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
    </>
  )
}

export default App;
