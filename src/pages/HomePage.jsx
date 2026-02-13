import React from 'react'

const HomePage = () => {
    return (
        <>
            <main>

                <section>
                    <div className='container  max-w-[343px] p-5 mx-auto  flex gap-6'>
                        <div className='border border-[1px] w-[100px] h-[101px] border-[#CCCCCC] rounded-[20px]'>
                            <img className='ml-auto mr-auto block pt-[5px]   ' src="rasm2.png" alt="" />
                            <h1 className='text-center items-center text-[#000000]/90' >Statistika</h1>
                        </div>
                        <div className='border border-[1px] w-[100px] h-[101px] border-[#CCCCCC] rounded-[20px]'>
                            <img className='ml-auto mr-auto block pt-[5px]   ' src="rasm3.png" alt="" />
                            <h1 className='text-center items-center text-[#000000]/90' >Qidiruv</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container  max-w-[343px] p-5 mx-auto '>
                        <div>
                            <h1 className='font-bold py-[5px] text-[20px]'>Yangiliklar</h1>
                        </div>
                        <div className='border  rounded-[17px] border-[#8E8E93]'>
                            <img className='w-full object-cover' src="rasm4.png" alt="" />
                            <h1 className='pl-2  pb-4 ' >Bugun 25ta mashina sotildi.</h1>
                        </div>
                        <img className='ml-auto mr-auto block py-[10px]  ' src="rasm5.png" alt="" />
                    </div>
                </section>
                <section>
                    <div className='container  max-w-[343px] px-5 mx-auto ' >
                        <h1 className='font-bold text-[20px] py-2 '>Oxirgi harakatlar</h1>
                        <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[black]/40'>
                            <div>
                                <img src="rasm6.png" alt="" />
                            </div>
                            <div className='flex gap-13'>
                                <div >
                                    <h1 className='font-[16px]'>Matiz</h1>
                                    <p className='text-[12px]'>100, 000, 000</p>
                                </div>
                                <div>
                                    <h1 className='text-[black]/60'>13 minut oldin</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[10px] border border-[1px] mt-4 p-2 rounded-2xl border-[black]/40'>
                            <div>
                                <img src="rasm6.png" alt="" />
                            </div>
                            <div className='flex gap-13'>
                                <div >
                                    <h1 className='font-[16px]'>Matiz</h1>
                                    <p className='text-[12px]'>100, 000, 000</p>
                                </div>
                                <div>
                                    <h1 className='text-[black]/60'>13 minut oldin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage