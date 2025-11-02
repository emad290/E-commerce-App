"use server"
import GetToken from "@/app/_Component/GetToken"



export default async function AddProduct(productId){
const token = await GetToken();

const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method: "POST",
    headers:{
        token ,
        "Content-Type":"application/json",
    },
    body:JSON.stringify({productId}),

})
const data= await res.json();
return data;

}