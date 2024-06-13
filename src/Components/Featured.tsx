import React from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/data';

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* Wrapper */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                {featuredProducts.map(item => (
                    <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[100vh] py-6">
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[80deg] transition-all duration-500">
                                <Image src={item.img} alt={item.title} fill className='object-contain' />
                            </div>
                        )}
                        {/* TEXT CONTAINER */}
                        <div className='flex-1 flex flex-col gap-4 items-center justify-center'>
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                            <p className='p-4 text-center 2xl:p-8'>{item.desc}</p>
                            <span>${item.price}</span>
                            <button className='bg-red-500 text-white py-2 px-4'>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
