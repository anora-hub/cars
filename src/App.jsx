import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loyout from './companents/Loyout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Loyout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
