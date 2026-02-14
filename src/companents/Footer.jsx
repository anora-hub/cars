import React from 'react'
import { NavLink } from 'react-router-dom'
import { useModal } from '../context/ModalContext'


const Footer = () => {
   
     const { openModal} = useModal()
    return (


        <>
            <footer>
                <div className="fixed bottom-0 left-0 w-full bg-white z-50">
                    <div className="container max-w-[343px] px-5 py-2 mx-auto flex justify-between  items-center">

                        <NavLink to="/" className="flex-1 flex flex-col items-center">
                            <img src="/rasm13.png" alt="" />
                            <h6 className="text-[#8E8E93] text-[10px]">Asosiy</h6>
                        </NavLink>

                        <NavLink to="/cars" className="flex-1 flex flex-col items-center">
                            <img src="/rasm12.png" alt="" />
                            <h6 className="text-[#8E8E93] text-[10px]">Mashinalar</h6>
                        </NavLink>
                            
                        <div className="flex-1 flex justify-center">
                            
                            <button  onClick={openModal}  className="w-[50px] p-[5px] bg-[#4C9E7A] rounded-[8px] text-white text-[26px]">
                                +
                            </button>
                        </div>

                        <NavLink to="/history" className="flex-1 flex flex-col items-center">
                            <img src="/rasm10.png" alt="" />
                            <h6 className="text-[#8E8E93] text-[10px]">Tarix</h6>
                        </NavLink>

                        <NavLink to="/profile" className="flex-1 flex flex-col items-center">
                            <img src="/rasm11.png" alt="" />
                            <h6 className="text-[#8E8E93] text-[10px]">Profil</h6>
                        </NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer                                      