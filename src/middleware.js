// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/",               // الصفحة الرئيسية
//     "/categories/:path*", 
//     "/products/:path*",
//     "/cart/:path*"
//   ],
// };





import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  // الصفحات اللي محتاجه حماية
  const protectedRoutes = ["/", "/categories", "/products","/cartgit add ."];

  if (protectedRoutes.includes(new URL(request.url).pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// التحديد للمسارات اللي بيتطبق عليها الميدل وير
export const config = {
  matcher: ["/", "/categories", "/products","/cart"],
};
