"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

        {/* Logo + Description */}
        <div>
          <h2 className="font-bold text-xl mb-3">MyShop</h2>
          <p className="text-gray-300 text-sm">
            Best products, best deals. Shop with confidence!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Shipping & Returns</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: support@myshop.com</li>
            <li>Phone: +20 111 222 3333</li>
            <li>Address: Cairo, Egypt</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  )
}
