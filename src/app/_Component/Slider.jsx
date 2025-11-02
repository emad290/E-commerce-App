import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Slider() {
  return (
    <div className='w-[80%] mx-auto my-12 bg-slate-300  rounded-lg '>
      <div className='md:flex-row flex flex-col gap-4  items-center justify-between '>
<div className=' relative w-1/4 h-[300px]'>
<Image src={"/jbl_soundbox_image.c02bcfd7.png"} fill alt='test'/>
</div>
<div className='text-center'>
    <h1 className='text-3xl font-bold text-slate-800'>Level Up Your <br />Gaming Experience</h1>
    <p className='text-xl text-slate-500 font-bold my-3'>From immersive sound to precise controls— <br />everything you need to win</p>
    <Button className='cursor-pointer bg-orange-600'>Shop Now</Button> 
</div>
<div className=' relative w-1/4 h-[300px]'>
<Image src={"/md_controller_image.036005e4.png"} fill alt='test'/>
</div>

      </div>
    </div>
  )
}
