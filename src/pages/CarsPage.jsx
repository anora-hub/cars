import React, { useState } from 'react'
import { useModal } from '../context/ModalContext'

const CarsPage = () => {

  const [rasm, setRasm] = useState(false)
  const { isOpen, closeModal } = useModal()

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


        {isOpen && (
          <div
            className="fixed inset-0 bg-[black]/40  bg-opacity-50 flex justify-center items-center z-51"
            onClick={closeModal}
          >
            <div
              className="bg-white p-5 rounded-lg w-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className='p-[1px] '>
                <div>
                  <div className='flex justify-between items-center'>
                    <h1>Avtomobil qo’shish</h1>
                    <img onClick={closeModal} src="/rasm24.png" alt="" />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Avtomabil"
                      className="w-full px-4 py-[4px] my-2 border border-[blue]/20 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                    />
                    <div className='relative'>
                      <input
                        type="text"
                        id="name"
                        placeholder="Narxi"
                        className="w-full px-4 py-[4px] my-2 border  border-[blue]/20 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                      />
                      <h1 className="absolute right-2 text-[#8E8E93] text-[] top-1/2 -translate-y-1/2   px-[2px] cursor-pointer">
                        UZS
                     </h1>
                    </div>
                   

                    <select className='w-full px-[9px] py-[4px] my-2 border border-[blue]/20 border-[2px] rounded-lg outline-none text-[#8E8E93]   focus:border-[black]/50'>
                      <option className='' value="">Avtomobil</option>
                      <option className='' value="">Foyda</option>
                      <option className='' value="">Xarajat</option>
                    </select>
                    <div className='border border-[1px] border-[#8E8E93] rounded-[10px]'>
                      <img onClick={closeModal} className='ml-auto mr-auto block my-3'  src="/rasm25.png" alt="" />
                      <button className='w-[230px]  bg-[#E3E3E3] p-1 rounded-[10px] text-[#8E8E93] my-4  ml-auto mr-auto block'>
                        Rasm joylash (ixtiyoriy)
                      </button>
                    </div>
                    <button onClick={closeModal} className='w-full  text-[white] bg-[#6184B5] p-1 mt-4 rounded-[10px]'>
                      Tasdiqlash
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}



      </main>

    </>
  )
}

export default CarsPage