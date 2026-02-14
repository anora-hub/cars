import React from 'react'

const ProfilePage = () => {
    return (
        <>
            <section>
                <div className='fixed top-0 left-0 w-full bg-white z-50'>
                    <div className=' container   max-w-[343px] px-5 py-2 mx-auto flex gap-[100px] '>
                        <img src="./public/rasm14.png" alt="" />
                        <h1 className='text-[20px] text-[#595959] font-medium  '>Profil</h1>
                    </div>
                    
                   
                </div>


            </section>     
            <section>
                <div className=' container   max-w-[343px] px-5 py-2 mx-auto mt-10'>
                    <div className='container   max-w-[343px] px-5 py-2 mx-auto '>
                        <img className='ml-auto mr-auto block' src="/rasm23.png" alt="" />
                    </div>
                    <div className="flex justify-center">
                        <button className="px-7 my-4 py-2 text-[12px] font-bold bg-white border border-[#CCCCCC] rounded-[37px] flex items-center gap-2 shadow-md">
                            <img src="/rasm24.png" alt="icon" className="w-5 h-5 " />
                            Rasmni o’zgartirish
                        </button>
                    </div>
               </div>
            </section>
            <section>
                <div className='mb-[80px]'>
                    <div className="container   max-w-[343px] px-5 py-2 mx-auto mt-10 ">
                        <div className='mb-8'>
                            <label className="block text-[16px] font-medium mb-1 " htmlFor="name">
                                Ism
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Ismingizni kiriting..."
                                className="w-full px-4 py-2 border border-gray-300 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                            />
                       </div>
                        <div className='mb-8'>
                            <label className="block text-[16px] font-medium mb-1 " htmlFor="name">
                                Familiya
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Familyangizni kiriting..."
                                className="w-full px-4 py-2 border border-gray-300 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                            />
                       </div>
                        <div className='mb-8'>
                            <label className="block text-[16px] font-medium mb-1 " htmlFor="name">
                                Telefon raqam
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Telefon raqamizni kiriting..."
                                className="w-full px-4 py-2 border border-gray-300 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                            />
                       </div>
                    </div>
                    
                </div>
            </section>

        </>
    )
}

export default ProfilePage