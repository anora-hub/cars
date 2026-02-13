import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='fixed bottom-0 left-0 w-full bg-white z-50  '>
                    <div className='container flex justify-between items-center gap-2 max-w-[343px] px-5 py-1 mx-auto '>
                        <div className='flex flex-col items-center '>
                            <img className=' ' src="rasm13.png " alt="" />
                            <h6 className='text-[#8E8E93] text-[10px]'>Asosiy</h6>
                        </div>
                        <div className=' flex flex-col items-center '>
                            <img className='' src="rasm12.png " alt="" />
                            <h6 className='text-[#8E8E93] text-[10px] '>Mashinalar</h6>
                        </div>
                        <div className=''>
                            <button className='w-[50px]   p-[5px] bg-[#4C9E7A] rounded-[8px] text-[white] text-[26px] '>
                                +
                            </button>
                        </div>
                        <div className=' flex flex-col items-center  '>
                            <img className=' ml-auto mr-auto block' src="rasm10.png " alt="" />
                            <h6 className='text-[#8E8E93] text-center text-[10px]'>Tarix</h6>
                        </div>
                        <div className=' flex flex-col items-center  '>
                            <img className=' ' src="rasm11.png " alt="" />
                            <h6 className='text-[#8E8E93] text-[10px]'>profil</h6>
                        </div>
                    </div>
               </div>

            </footer>
           
        </>
    )
}

export default Footer