"use client";

import GrtCartData from "@/CarAction/GrtCartData";
import React, { createContext, useState, useEffect } from "react";
import GetToken from "./GetToken";


export const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
const [cartIdNum,srtCartIdNum]= useState(0)
  async function increment() {
    const token = await GetToken();
if(token){

 try {
 
      const data = await GrtCartData();
      let sum= 0
        
data.data.products.forEach((item)=>{
    sum+=item.count
})
setCount(sum);
srtCartIdNum(data.cartId)
   
    } catch (error) {
      console.log("Error fetching cart data:");
    }


}


   
  }

  useEffect(() => {
    increment();
  }, []);



  return (
    <AppContext.Provider value={{ count, setCount , cartIdNum }}>
      {children}
    </AppContext.Provider>
  );
}

