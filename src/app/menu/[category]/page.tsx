import { pizzas } from '@/data';
import Link from 'next/link';
import React from 'react';

const Categorypage = () => {
  return (
    <div className='flex flex-wrap justify-center text-red-500'>
      {pizzas.map(item => (
        <Link href={`/product/${item.id}`} key={item.id} className='w-full md:w-1/3 lg:w-1/3 p-4'>
          <div className='border p-4 rounded-md flex flex-col items-center group'>
            <div className='relative w-full h-64'>
              <img src={item.img} alt={item.title} className='object-contain w-full h-full' />
            </div>
            <div className="flex items-center justify-between w-full mt-4">
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <h2 className='text-lg font-semibold group-hover:hidden'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categorypage;
