import React from 'react'
import GetAllProduct from '../_Component/GetAllProduct'
import GetToken from '../_Component/GetToken';

export default async function page() {
  const token = await GetToken()
  console.log(token);
  return (
    <div>
      <GetAllProduct/>
    </div>
  )
}
