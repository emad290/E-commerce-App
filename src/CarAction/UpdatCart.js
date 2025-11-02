import GetToken from "@/app/_Component/GetToken";


export default async function UpdatCart(id,count){
const token = await GetToken();
const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:"PUT",
    headers:{
        token,
         "Content-Type":"application/json",
    },
    body:JSON.stringify({count})
})
const data= await res.json();
return data
}