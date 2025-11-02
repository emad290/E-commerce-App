// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/",               // الصفحة الرئيسية
//     "/categories/:path*", 
//     "/products/:path*",
//     "/cart/:path*"
//   ],
// };





// import { NextResponse } from 'next/server'

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;

//   // الصفحات اللي محتاجه حماية
//   const protectedRoutes = ["/", "/categories", "/products","/cart"];

//   if (protectedRoutes.includes(new URL(request.url).pathname)) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// // التحديد للمسارات اللي بيتطبق عليها الميدل وير
// export const config = {
//   matcher: ["/", "/categories", "/products","/cart"],
// };




import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })

  const protectedRoutes = ["/", "/categories", "/products", "/cart"]

  if (protectedRoutes.includes(new URL(req.url).pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/categories", "/products", "/cart"],
}
