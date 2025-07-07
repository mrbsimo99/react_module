import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './layouts/Layout'

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}



export default App
