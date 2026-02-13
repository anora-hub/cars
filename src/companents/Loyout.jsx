import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Loyout = () => {
  return (
    <div>
        
        <main className=''>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Loyout