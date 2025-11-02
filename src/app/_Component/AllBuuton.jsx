"use client"
import AddProduct from '@/CarAction/AddProduct'
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';
import { AppContext } from './CountItem';



export default function AllBuuton({id}) {
const[dis,setdis]=useState(false)
const {count,setCount}=useContext(AppContext)

async function handleAddToCart(id){
  setdis(true);
 const data= await AddProduct(id);
 console.log(data);
 if(data.status==="success"){
toast.success("Product added to cart successfully",{duration:4000,position:"top-right"})
  setdis(false);
  setCount(count+1)
 }else{
  toast.error("Failed to add product to cart",{duration:4000,position:"top-center"})
  setdis(false);
 }
}
  return (
    <div className=' my-4 text-center'>
      <Button   disabled={dis}  onClick={() => handleAddToCart(id)}  className='w-full cursor-pointer'>{dis? "loading...." : "Add To Cart"} </Button>
    </div>
  )
}
