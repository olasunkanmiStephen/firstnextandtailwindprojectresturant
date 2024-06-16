import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Loginpage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* box */}
      <div className="h-full shadow-2xl flex flex-col md:flex-row rounded-md md:h-[70%] md:w-full lg:w-[75%] 2xl:w-1/2 ">
        {/* image container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="Login Background" layout="fill" className="object-cover" />
        </div>
        {/* form container */}
        <div className="p-10 flex flex-col gap-4 md:w-1/2 h-2/3">
          <h1 className="text-xl font-bold">Welcome</h1>
          <p className="">Log into your account or create a new one using social buttons</p>
          <button className="flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-md mb-4">
            <Image src="/google.png" alt="Google" width={20} height={20} className="object-contain" />
            <span className="text-gray-700">Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 p-4 w-full ring-1 ring-orange-100 rounded-md mb-4">
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="object-contain" />
            <span className="text-gray-700">Sign in with Facebook</span>
          </button>
            <p className='text-sm'>
              Have a problem?<Link className='underline' href="/"> Contact </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
