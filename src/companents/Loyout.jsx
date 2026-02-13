import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Loyout = () => {
  return (
    <div>
        <Header/>
        <main className='mt-15 mb-15'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Loyout