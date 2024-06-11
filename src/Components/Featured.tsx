import React from 'react'
import Image from 'next/image'


const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
        {/* Wrapper */}
        <div className="w-max flex">
            {/* SINGLE ITEM */}
            <div className="w-screen h-[60vh] flex flex-col items-center justify-around">
                {/* iMAGE CONTAINER */}
                <div className="relative">
                    <Image src="" alt="" fill/>
                </div>
                {/* TEXT CONTAINER */}
                <div>
                    <h1 className="">Title</h1>
                    <p>Desc</p>
                    <span>123</span>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured