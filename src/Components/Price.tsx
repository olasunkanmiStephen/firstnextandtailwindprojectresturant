"use client"

import React, { useState, useEffect } from 'react';

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (options && options.length > 0) {
      setTotal((price + options[selected].additionalPrice) * quantity);
    } else {
      setTotal(price * quantity);
    }
  }, [price, quantity, selected, options]);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button 
            key={option.title} 
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background: selected === index ? "rgba(248, 113, 113)" : "white", 
              color: selected === index ? "white" : "red"
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between w-full h-12 ring-1 ring-red-500 p-3">
          <span className=''>Quantity</span>
          <div className="flex gap-4 items-center">
            <button 
              className='px-2 py-1 border rounded' 
              onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
            >
              {"<"}
            </button>
            <span className='mx-2'>{quantity}</span>
            <button 
              className='px-2 py-1 border rounded' 
              onClick={() => setQuantity(prev => prev + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className='uppercase w-56 bg-red-500 p-3 ring-1 ring-red-500 text-white'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
