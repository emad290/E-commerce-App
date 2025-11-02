import GetToken from "@/app/_Component/GetToken";


export default async function GetUserOrder(id) {

const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

const data= await res.json();
return data;
}