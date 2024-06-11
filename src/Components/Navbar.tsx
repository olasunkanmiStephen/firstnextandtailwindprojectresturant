"use client"

import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Carticon from './Carticon'
import Image from 'next/image'

const Navbar = () => {

  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 lx:px-40">
      {/* LEFT LINK */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>
        {/* Logo */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href="/" >Massimo</Link>
        </div>
        {/* Mobile MENU */}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* RIGHT LINK */}
        <div className='hidden md:flex gap-4 items-center flex-1'>
          <div className='flex items-center md:absolute top-3 right-2 lg:static cursor-pointer gap-2 bg-orange-300 px-1 rounded-md'>
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>123 456 78</span>
          </div>
          {!user ? (
            <Link href='/login'>Login</Link>
          ):(
            <Link href='/orders'>Orders</Link>
          )}
        <Carticon/>
      </div>
    </div>
  )
}

export default Navbar
