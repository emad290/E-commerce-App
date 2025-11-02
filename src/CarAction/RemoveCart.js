import GetToken from "@/app/_Component/GetToken";

export default async function RemoveCart(){

    const token = await GetToken()
const res= await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method: "DELETE",
    headers:{
        token ,
        "Content-Type":"application/json",
    }})
    const data= await res.json();
    return data;
}
