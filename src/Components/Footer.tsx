import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h24 p-4 lg:p-20 xl:p-10 text-white flex items-center justify-between bg-red-500'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>© ALL RIGHT RESERVED</p>
    </div>
  )
}

export default Footer