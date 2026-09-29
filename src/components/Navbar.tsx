"use client";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const { cartCount } = useCart();
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-black text-2xl">
                <span className="text-blue-600">Gadget</span><span className="text-black">Zone</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/products" className="hover:text-blue-600">All Products</Link>
                    <Link href="/products?cat=smartphones" className="hover:text-blue-600">Smartphones</Link>
                    <Link href="/products?cat=laptops" className="hover:text-blue-600">Laptops</Link>
                    <Link href="/products?cat=tablets" className="hover:text-blue-600">Tablets</Link>
                    <Link href="/products?cat=smartwatches" className="hover:text-blue-600">Smartwatches</Link>
                    <Link href="/products?cat=accessories" className="hover:text-blue-600">Accessories</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                        <span className="absolute  -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center
                        rounded-full">
                            {cartCount}
                        </span>
                    )}
                    </Link>
                    <Link href="/login" className="hidden md:flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-sm">
                    <User size={16} /> Sign In
                    </Link>
                    <button onClick={() => setOpen(!open)} className="md:hidden"><Menu /></button>
                </div>
            </div>
            {open && (
                <div className="md:hidden bg-white border-t p-4 flex flex-col gap-3">
                    <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
                    <Link href="/products" onClick={()=>setOpen(false)}>All Products</Link>
                    <Link href="/login" onClick={()=>setOpen(false)}>Sign In</Link>
                </div>
            )}
        </nav>
    );
}