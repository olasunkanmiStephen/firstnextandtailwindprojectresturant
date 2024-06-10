"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' // Import Link from next/link

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            {!open ? (
                <Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)} />
            ) : (
                <Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)} />
            )}
            {open && (
                <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-column items-center jusstify-center text-3xl'>
                    {links.map(item => (
                        <Link key={item.id} href={item.url}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default Menu
