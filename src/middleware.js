export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",               // الصفحة الرئيسية
    "/categories/:path*", 
    "/products/:path*",
    "/cart/:path*"
  ],
};
