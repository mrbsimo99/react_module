import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './layouts/Layout'
import Details from './pages/Details'
import { TodoProvider } from './components/TodoContext'
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'

const App = () => {


  return (
    <>

      <ReduxProvider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todos/:id' element={<TodoProvider><Details /></TodoProvider>} />
          </Route>
        </Routes>
      </ReduxProvider>

    </>
  )
}



export default App
