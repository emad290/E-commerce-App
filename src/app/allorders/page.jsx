"use client"
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../_Component/CountItem'
import GetUserOrder from '@/CarAction/GetUserOrder'

export default async function page() {

//        const iddata= await GrtCartData()     

// // const data= await GetUserOrder(iddata.cartId)

// console.log(iddata)


  return (
    <div className='my-20 w-full h-screen flex justify-center items-center'>
      <h1 className='text-3xl font-bold text-orange-500'>All Orders</h1>
    </div>
  )
}
