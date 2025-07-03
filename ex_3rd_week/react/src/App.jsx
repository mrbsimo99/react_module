import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { TodoProvider } from './components/TodoContext'

const App = () => {

  return (
    <>
         <TodoProvider>
      <TodoList />
    </TodoProvider>
    </>
  )
}



export default App;
