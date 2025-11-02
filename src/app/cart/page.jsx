"use client"

import GrtCartData from '@/CarAction/GrtCartData'
import RemoveCart from '@/CarAction/RemoveCart'
import SpasifcProduct from '@/CarAction/RemoveOneItem'
import Image from 'next/image'
import React, { useContext, useEffect, useState, useTransition } from 'react'
import { AppContext } from '../_Component/CountItem'
import UpdatCart from '@/CarAction/UpdatCart'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function page() {

const [allproduct,setallproduct]=useState([])
const [tottalprice,settottalprice]=useState("")
const [updatedload,setupdatedload]=useState(false)
 const [isPending, startTransition] = useTransition();
const {count,setCount}=useContext(AppContext)

async function fetchCartData() {
    const data= await GrtCartData()     
console.log(data.cartId)
    if(data.status==="success"){
      setallproduct(data.data.products);
        settottalprice(data.data.totalCartPrice);
    }
}



  async function RemoveItem(id,countitem) {
    const data = await SpasifcProduct(id);
    console.log(data);
    if (data.status === "success") {
      fetchCartData();
setCount(count-countitem)
    }
  }


  const handleRemove = (id,countitem) => {
    startTransition(async () => {
      await RemoveItem(id,countitem);
    });
  };



async function UpdatedCartItem(id,newcount,countsr){
  setupdatedload(true)
const data= await UpdatCart(id,newcount)
console.log(data)
if(data.status=="success"&&countsr=="+"){
  fetchCartData();
  setCount(count+1)
  setupdatedload(false)
}else{
  fetchCartData()
    setCount(count-1)
    setupdatedload(false)
}
}







async function clearCart(){
const data= await RemoveCart()     

if(data.message==="success"){
fetchCartData();
setCount(0)
}
}


useEffect(() => {

    fetchCartData();
}, [])




  return (
    <div className='w-[80%] mx-auto p-6 my-20'>
      
{allproduct.length===0 ? <h2 className='text-center text-2xl font-semibold my-10'>Your cart is empty</h2> :

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <button onClick={()=>clearCart()} className=" cursor-pointer top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Clear Cart</button>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
        <p>image</p>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>


    <tbody>

{allproduct.map((product,index)=>(
 <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <Image src={product.product.imageCover} width={80} height={80} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button disabled={updatedload} onClick={()=>UpdatedCartItem(product.product.id,product.count-1,"-")} className= " cursor-pointer inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          <span className='text-xl font-bold'>{updatedload?"...":"-"}</span>
            </button>
            <div>
<h1>{product.count}</h1>
            </div>
            <button disabled={updatedload} onClick={()=>UpdatedCartItem(product.product.id,product.count+1,"+")}  className=" cursor-pointer inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span  className="sr-only">Quantity button</span>
                <span className='text-xl font-bold'>{updatedload?"...":"+"}</span>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.price} EGY
        </td>
        <td className="px-6 py-4">
          <button  disabled={isPending} onClick={()=>handleRemove(product.product.id ,product.count)} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">   {isPending ? "Removing..." : "Remove Item"}</button>
        </td>
      </tr>

))}

     


<tr className=''>
    <td>  </td>
    <td>   </td>
    <td className='text-2xl font-bold text-emerald-600'>tottal :</td>
    <td className='text-2xl font-bold text-emerald-600'>{tottalprice} EGY</td>
</tr>
    <Link href={"/checkout"} className='text-center'>
    <Button className={"w-full text-center my-6 cursor-pointer bg-orange-600"}>Check out Now</Button>
    </Link>
    
    </tbody>
  </table>
</div>

}







    </div>
  )
}
