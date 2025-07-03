import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
// import { TodoProvider } from './components/TodoContext'

const App = () => {

  return (
    <>
      <TodoList />
    </>
    /* per usare UseContext
        <TodoProvider>
                <TodoList />
            </TodoProvider>
            */
  )
}



export default App;
