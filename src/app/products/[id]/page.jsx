import AllBuuton from '@/app/_Component/AllBuuton';

import Image from 'next/image';
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SpasifcProduct from '@/CallApi/Spasifc';












export default async function page({params}) {
    const {id} = await params;

const data = await SpasifcProduct(id);
console.log(data.data);
  return (
    <div className='w-[80%] mx-auto p-6 my-20'>
     <div className='flex flex-wrap items-center '> 
<div className='w-full md:w-1/2 bg-slate-300 p-6'>
<div className=' relative w-[80%] h-[300px] mx-auto '>
<Image src={data?.data?.imageCover} alt='testest' fill/>
</div>
</div>

<div className='w-full md:w-1/2 p-6'>
<h1 className='font-bold text-2xl text-slate-700'>{data?.data?.
description
}</h1>
<h2 className='text-3xl font-bold text-orange-700 my-3'>{data?.data?.title}</h2>
<h1 className='text-2xl font-bold text-emerald-900'>{data?.data?.
price
} : EGY </h1>
<div className='flex gap-3 text-yellow-500'>
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStarHalfAlt size={20} />
</div>

<AllBuuton id={data?.data?._id}/>
</div>
     </div>



<div className='my-12 w-[50%] mx-auto'>
    <Carousel>
  <CarouselContent>
{data?.data?.images.map((img,index)=>(
  <CarouselItem key={index}>
        <div className=' relative w-full h-[300px] '>
            <Image src={img} alt='io' fill className='object-contain'/>
        </div>
    </CarouselItem>
))}
  
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    
</div>

    </div>
  )
}
