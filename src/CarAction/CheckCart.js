import GetToken from "@/app/_Component/GetToken";


export default async function CheckMoneyCart(shippingAddress,id){

const token = await GetToken();
const res= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,{
    method:"POST",
    headers:{
        token,
         "Content-Type":"application/json",
    },
    body:JSON.stringify(shippingAddress)
})
const data= await res.json();

return data;


}