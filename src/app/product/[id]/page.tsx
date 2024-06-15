import Price from '@/Components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';
import React from 'react';

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row items-center'>
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2">
        <Image 
          src={singleProduct.img} 
          alt={singleProduct.title} 
          layout='fill' 
          className='object-contain'/>
      </div>
      )}
      {/* Text Container */}
      <div className="md:w-1/2 flex flex-col gap-4 justify-center p-4">
        <h1 className='text-3xl font-bold uppercase mb-4'>{singleProduct.title}</h1>
        <p className='text-lg mb-4'>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  );
}

export default SingleProductPage;
