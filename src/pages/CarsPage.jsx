import React, { useState } from 'react'

const CarsPage = () => {

  const [rasm , setRasm] = useState(false)
  return (
    <>
      <main>
        <section>
          <div className='fixed top-0 left-0 w-full bg-white z-50'>
            <div className=' container   max-w-[343px] px-5 py-2 mx-auto flex gap-[80px] '>
              <img src="rasm14.png" alt="" />
              <h1 className='text-[20px] text-[#595959] font-medium  '>Mashinalar</h1>
            </div>
          </div>
         
        
        </section>
        <section>
          <div className="relative w-full container mt-[60px] max-w-[343px] px-5 py-1 mx-auto">

            <input
              type="text"
              placeholder="Sana, rusum, raqam bo’yicha qidiring"
              className="w-full pl-10 pr-10 py-2 border border-[#78787833] text-[#78787833] rounded-[20px] outline-none text-[12px]"
            />

           
            <img
              src="/rasm16.png"
              alt="search"
              className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5"
            />

          
            <img
              src="/rasm17.png"
              alt="filter"
              className="absolute right-7 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setRasm(!rasm)}
            />

          
            {rasm && (
              <div className="absolute top-[55px] right-5 w-[305px] bg-white shadow-lg rounded-lg p-3 z-50">
                <div className='flex items-center gap-37 hover:bg-gray-100 hover:bg-gray-100 p-1 rounded cursor-pointer '>
                  <p className=" ">
                    Sana bo’yicha
                  </p>
                  <img src="/rasm20.png" alt="" />
                </div>
                <p className="hover:bg-gray-100 p-1  rounded cursor-pointer">
                  Sotilganlar
                </p>
                <p className="hover:bg-gray-100 p-1 rounded cursor-pointer">
                  Sotilmaganlar
                </p>
              </div>
            )}

          </div>

        </section>
        <section>
          <div className='container mb-[70px]  max-w-[343px] px-5 py-1 mx-auto flex flex-col gap-3'>
            
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
              <div>
                <img src="rasm19.png" alt="" />
              </div>
              <div className='flex gap-13'>
                <div className='flex flex-col gap-[13px]' >
                  <h1 className='font-[16px] font-medium'>Matiz</h1>
                  <p className='text-[20px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                </div>

              </div>
            </div>
         </div>
        </section>
      </main>

    </>
  )
}

export default CarsPage