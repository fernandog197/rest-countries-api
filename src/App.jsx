import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route strict path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
