import Image from 'next/image'
import React from 'react'

export default function Featuchre() {
  return (
    <div className='w-[80%] mx-auto p-6 my-6'>

<div className="group">
  <h1 className="relative w-fit mx-auto text-3xl font-bold mb-6 pb-2 text-center">
    Featured Products
    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-500 -translate-x-1/2 group-hover:w-full"></span>
  </h1>
</div>

        
      <div className='flex flex-wrap'>
<div className="relative w-full md:w-1/3  p-4 group">
  <div className="overflow-hidden rounded-lg relative">
<div className='  relative w-full h-[300px]'>

  <Image
      src="/girl_with_headphone_image.8cdb8255.png"
      alt="product"
      className="w-full h-60 object-contain group-hover:scale-105 duration-300"
       fill
    />
</div>
    {/* صورة المنتج */}
  

    {/* الـ Overlay */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center text-white p-4 gap-2">
      <h1 className="text-lg font-bold">Product Name</h1>
      <p className="text-sm">Short description about this product.</p>
      <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 duration-300">
        Add to Cart
      </button>
    </div>

  </div>
</div>

<div className="relative w-full md:w-1/3 p-4 group">
  <div className="overflow-hidden rounded-lg relative">
<div className=' relative w-full h-[300px]'>
  <Image
      src="/girl_with_earphone_image.604badd7.png"
      alt="product"
      className="w-full h-60 object-contain group-hover:scale-105 duration-300"
    fill
    />
</div>
    {/* صورة المنتج */}
  

    {/* الـ Overlay */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center text-white p-4 gap-2">
      <h1 className="text-lg font-bold">Product Name</h1>
      <p className="text-sm">Short description about this product.</p>
      <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 duration-300">
        Add to Cart
      </button>
    </div>

  </div>
</div>


<div className="relative w-full md:w-1/3  p-4 group">
  <div className="overflow-hidden rounded-lg relative">
<div className='w-full  relative h-[300px]'>
  <Image
      src="/boy_with_laptop_image.19edbd3e.png"
      alt="product"
      className="w-full h-60 object-contain group-hover:scale-105 duration-300"
     fill
    />
</div>
    {/* صورة المنتج */}
  

    {/* الـ Overlay */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center text-white p-4 gap-2">
      <h1 className="text-lg font-bold">Product Name</h1>
      <p className="text-sm">Short description about this product.</p>
      <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 duration-300">
        Add to Cart
      </button>
    </div>

  </div>
</div>

      </div>
    </div>
  )
}
