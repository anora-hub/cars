import React, { useState } from 'react'




const Header = () => {
   
    return (
        <>
            <header className='fixed top-0 left-0 w-full bg-white z-50'>
                <div className=' container   max-w-[343px] px-5 py-1 mx-auto  justify-between flex   '>
                    <h1 className='text-[#595959]'>Amirobod avto savdo</h1>
                    <img
                       
                        src="./public/rasm1.png" alt="" />
                 
                </div>
               
            </header>
        </>
    )
}

export default Header