import React from 'react';
import Image from 'next/image';

const Cartpage = () => {
  // Sample cart items data
  const cartItems = [
    { id: 1, name: 'sicilian', size: 'Large', price: 79.90, quantity: 1, img: '/p1.png' },
    { id: 2, name: 'sicilian', size: 'Large', price: 79.90, quantity: 1, img: '/p1.png' },
    { id: 3, name: 'sicilian', size: 'Large', price: 79.90, quantity: 1, img: '/p1.png' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500'>
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <Image src={item.img} alt={item.name} width={100} height={100}/>
            <div>
              <h1 className="uppercase text-xl font-bold">{item.name}</h1>
              <span>{item.size}</span>
            </div>
            <h2 className='font-bold'>${item.price.toFixed(2)}</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        ))}
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <span>$Subtotal [{cartItems.length} items]</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <hr />
        <button className="bg-red-500 text-white rounded-md w-1/2 p-4 self-center">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cartpage;
