"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carticon from './Carticon'

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(false);

    return (
        <>
            {!open ? (
                <Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)} />
            ) : (
                <Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)} />
            )}
            {open && (
                <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl'>
                    {links.map(item => (
                        <Link key={item.id} href={item.url} passHref>
                            <div onClick={() => setOpen(false)}>{item.title}</div>
                        </Link>
                    ))}
                    {!user ? (
                        <Link href="/login" passHref>
                            <div onClick={() => setOpen(false)}>Login</div>
                        </Link>
                    ) : (
                        <Link href="/orders" passHref>
                            <div onClick={() => setOpen(false)}>Orders</div>
                        </Link>
                    )}
                    <Link href="/cart" passHref>
                        <div onClick={() => setOpen(false)}><Carticon /></div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Menu
