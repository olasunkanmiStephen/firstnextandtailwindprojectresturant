import React from 'react'
import Image from 'next/image'

const Cartpage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* product container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:2/3">
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span>X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span>X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span>X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:1/3">
        <div className="flex justify-between">
          <span className="">$Subtotal [3 items]</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="text-red-500">$81.70</span>
        </div>
        <button className="bg-red-500 text-white rounnded-md w-1/2 p-4 self-end">CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cartpage