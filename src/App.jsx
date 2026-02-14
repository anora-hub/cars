import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loyout from './companents/Loyout'
import HomePage from './pages/HomePage'
import CarsPage from './pages/CarsPage'
import HistoryPage from './pages/HistoryPage'
import ProfilePage from './pages/ProfilePage'
import { ModalProvider } from './context/ModalContext'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <ModalProvider>
          <Routes>
            <Route element={<Loyout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='cars' element={<CarsPage />} />
              <Route path='history' element={<HistoryPage />} />
              <Route path='profile' element={<ProfilePage />} />
            </Route>
          </Routes>
       </ModalProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
