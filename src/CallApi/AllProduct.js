export default async function AllProduct(count) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=${count}`);
const data = await res.json();
    return data;
}