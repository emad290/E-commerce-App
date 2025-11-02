
import AllProduct from '@/CallApi/AllProduct';

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
import Link from 'next/link';
export default async function GetAllProduct() {
const products = await AllProduct(20);




  return (
    <div className='w-[80%] mx-auto p-6'>
      <div className="text-center my-14">
  <h1 className="text-3xl font-bold mb-2 ">Popular Products</h1>
  <div className="relative w-40 h-[4px] mx-auto bg-gray-300 overflow-hidden rounded-full">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[ping_2s_infinite]"></div>
  </div>
</div>

    <div className='flex flex-wrap'>

{products?.data.map((product)=>(
<div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-6   group' key={product._id}>
<Link href={`/products/${product.id}`}>
<Card className={"hover:bg-slate-200 transition-all duration-300"}>
  <CardHeader>
    <CardTitle>{product.category.name}</CardTitle>
    <CardDescription>
      <div className='overflow-hidden relative w-full h-[150px] '>
        <Image className='group-hover:scale-110 duration-600 transition-all' src={product.imageCover} fill alt='item'/>
      </div>
    </CardDescription>
   
  </CardHeader>
  <CardContent>
    <p className=' line-clamp-2 text-[12px] font-semibold text-slate-900'>{product.description}</p>
  </CardContent>
  <CardFooter>
    <p className='text-xl font-bold text-emerald-800'>{product.price} :EGY</p>
  </CardFooter>
</Card>
</Link>

<AllBuuton id={product._id}/>
</div>
))}


    </div>
    </div>

  )
}
