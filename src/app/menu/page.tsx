import React from 'react';
import Link from 'next/link';
import { menu } from '@/data'; // Ensure you have a `menu` array in your data file

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row flex-wrap items-center'>
      {menu.map(category => (
        <Link 
          href={`/menu/${category.slug}`} 
          key={category.id} 
          className="w-full md:w-1/3 h-1/3 bg-cover py-3 px-3 lg:py-8 lg:px-8 md:h-80" 
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className='uppercase font-bold text-2xl lg:text-3xl'>{category.title}</h1>
            <p className='text-sm my-2 lg:my-6'>{category.desc}</p>
            <button 
              className='hidden xl:block border p-2 rounded-md' 
              style={{ backgroundColor: category.color, color: category.color === "black" ? "white" : "red" }}
            >
              View Category
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;
