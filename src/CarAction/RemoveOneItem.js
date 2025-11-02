import GetToken from "@/app/_Component/GetToken";


export default async function SpasifcProduct(id){
const token = await GetToken()

const res= await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:'DELETE',
    headers:{
token,
   "Content-Type":"application/json",
    }
});
const data=await res.json();
return data;
}