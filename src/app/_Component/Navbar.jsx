"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { signOut, useSession } from "next-auth/react";
import { AppContext } from "./CountItem";

export default function Navbar() {
const session= useSession();
// console.log(session);
const {count}=useContext(AppContext)

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Cart" , href: "/cart" },
  ];

  return (
    <nav className="bg-white shadow-md w-full top-0 z-50 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          <h1 className="text-2xl font-bold">
            <span className="text-3xl text-orange-400">QU</span>ick cart
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-orange-500 transition">
               {link.name === "Cart" ? (
              <div className="relative flex items-center">
                <ShoppingCart />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
                    {count}
                  </span>
                )}
              </div>
            ) : (
              link.name
            )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth + Search */}
        <div className="hidden md:flex items-center gap-5 font-medium">
          {!session.data ? <div className="flex gap-5"><Link href="/login" className="hover:text-green-600 transition">Login</Link>
          <Link href="/register" className="hover:text-blue-600 transition">Register</Link></div>: <div className="flex gap-3 items-center">
            <h1 className="text-xl text-orange-500">hi : {session?.data?.user?.name}</h1>
            <Link className="text-xl" href={"/"} onClick={()=>signOut({callbackUrl:"/login"})}>Logout</Link>
          </div>   }
      
          <Search className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block hover:text-orange-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><button className="text-left w-full">Logout</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
