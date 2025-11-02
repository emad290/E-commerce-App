import AllCat from '@/CallApi/AllCat';
import React from 'react'
import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import AllBuuton from './AllBuuton';
export default async function ShowCatg() {
const products= await AllCat();


  return (
  <div className='w-[80%] mx-auto p-6'>
      <div className="text-center my-10">
  <h1 className="text-3xl font-bold mb-2">Popular Category</h1>
  <div className="relative w-40 h-[4px] mx-auto bg-gray-300 overflow-hidden rounded-full">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[ping_2s_infinite]"></div>
  </div>
</div>

    <div className='flex flex-wrap'>
{products.data.map((product)=>(

<div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-6   group' key={product._id}>
<Card>
  <CardHeader>
    <CardTitle>{product.name}</CardTitle>
    <CardDescription>
      <div className='overflow-hidden relative w-full h-[150px]'>
        <Image className='group-hover:scale-110 duration-600 transition-all' src={product.image} fill alt='item'/>
      </div>
    </CardDescription>
   
  </CardHeader>

</Card>

</div>


))}



    </div>
    </div>
  )
}
