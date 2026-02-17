import React, { useEffect, useState } from 'react'
import { useModal } from '../context/ModalContext'
import { useNavigate } from 'react-router-dom'

const CarsPage = () => {

  const [rasm, setRasm] = useState(false)
  const { isOpen, closeModal, addCar } = useModal()
  const navigate = useNavigate();
  const [modal, setModal] = useState(false)

  const handleAdd = () => {
    addCar({ name, price, number });
    closeModal();
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const { loading, setLoading } = useModal();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-[999]">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
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
              className="absolute right-7 top-1/2 -translate-y-1/2   hover:text-blue-500   w-5 h-5 cursor-pointer"
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

            {modal && (
              <div
                className="fixed inset-0 bg-black/40 flex justify-center items-center z-51"
                onClick={() => setModal(false)}
              >
                <div
                  className="bg-white p-4 rounded-lg w-[300px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className='flex items-center gap-3'>
                    <div>
                      <img src="/rasm26.png" alt="" />
                    </div>
                    <div>
                      <div className='flex flex-col gap-[5px]' >
                        <div className='flex items-center gap-[90px]'>
                          <h1 className='font-[16px] font-medium'>Matiz</h1>
                          <img className='cursor-pointer' onClick={() => setModal(false)} src="/rasm24.png" alt="" />
                        </div>
                        <p className='text-[18px] font-bold'><span className='text-[#00C0E8]'>01</span> A 501 RA</p>
                        <button className='w-[80px] cursor-pointer text-[white] bg-[#4C9E7A] p-1 rounded-2xl'>
                          sotilgan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img className='py-3' src="/rasm27.png" alt="" />
                  </div>
                  <div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] font-bold text-[14px]'>model:</p>
                      <p className='font-bold text-[14px] '>Matiz</p>
                    </div>
                    <div className='flex items-center justify-between py-[1px]'>
                      <p className='text-[#8E8E93] font-bold text-[14px]'>Davlat raqami:</p>
                      <p className='font-bold text-[14px] '>A 501 RA</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Manzil:</p>
                      <p className='font-bold text-[14px] '>Toshkent sh.</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Sotgan:</p>
                      <p className='font-bold  text-[14px]'>94 055 55 564</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Olgan:</p>
                      <p className='font-bold  text-[14px]'>94 050 55 78</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Olingan narx:</p>
                      <p className='font-bold  text-[14px]'>100 000 000</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Sotilgan narx:</p>
                      <p className='font-bold  text-[14px]'>170 000 000</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Xarajat:</p>
                      <p className='font-bold  text-[14px]'>40 000 000</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Olingan sana:</p>
                      <p className='font-bold  text-[14px]'>04.02.2026</p>
                    </div>
                    <div className='flex items-center justify-between py-1'>
                      <p className='text-[#8E8E93] text-[14px] font-bold'>Sotilgan sana:</p>
                      <p className='font-bold  text-[14px]'>08.02.2026</p>
                    </div>
                  </div>
                </div>
              </div>
            )}


            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
            <div onClick={() => setModal(!modal)} className='flex gap-[10px]  border border-[1px] p-2 rounded-2xl border-[#7676801F]'>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      placeholder="Avtomabil"
                      className="w-full px-4 py-[4px] my-2 border border-[blue]/20 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                    />
                    <div className='relative'>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        id="name"
                        placeholder="Narxi"
                        className="w-full px-4 py-[4px] my-2 border  border-[blue]/20 border-[2px] rounded-lg outline-none text-gray-500 focus:border-[black]/50 "
                      />
                      <h1 className="absolute right-2 text-[#8E8E93] text-[] top-1/2 -translate-y-1/2   px-[2px] cursor-pointer">
                        UZS
                      </h1>
                    </div>


                    <select value={type} onChange={(e) => setType(e.target.value)} className='w-full px-[9px] py-[4px] my-2 border border-[blue]/20 border-[2px] rounded-lg outline-none text-[#8E8E93]   focus:border-[black]/50'>
                      <option value="avtomobil">Avtomobil</option>
                      <option value="foyda">Foyda</option>
                      <option value="xarajat">Xarajat</option>
                    </select>
                    <div className='border border-[1px] border-[#8E8E93] rounded-[10px]'>
                      <img onClick={closeModal} className='ml-auto mr-auto block my-3' src="/rasm25.png" alt="" />
                      <button className='w-[230px]  bg-[#E3E3E3] p-1 rounded-[10px] text-[#8E8E93] my-4  ml-auto mr-auto block'>
                        Rasm joylash (ixtiyoriy)
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        addCar({ name, price, type });
                        closeModal();
                        navigate("/history");


                        setName("");
                        setPrice("");
                        setType("");
                      }}
                      className='w-full cursor-pointer text-white bg-[#6184B5] p-1 mt-4 rounded-[10px]'
                    >
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