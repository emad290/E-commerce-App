"use server"
import GetToken from "@/app/_Component/GetToken";



export default async function GrtCartData(){
const token = await GetToken()

const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method: "GET",
    headers:{
        token ,
        "Content-Type":"application/json",
    }

}
)
const data= await res.json();
return data;
}

