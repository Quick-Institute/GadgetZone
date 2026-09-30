"use client";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import { ShoppingCart} from "lucide-react";

export default function Navbar() {
    const { cartCount } = useCart();
    return (
        <header className="w-full sticky top-0 z-50">
            {/*Logo*/}
        <div className="bg-[#0f172a] px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-black text-xl text-[#0ea5e9]">GadgetZone</Link>
        {/*Search Bar*/}
        <div className="flex-1 max-w-md mx-6 hidden md:block">
            <input placeholder="Search Smartphones, Laptops..."
            className="w-full bg-slate-800 text-white text-sm px-4 py-2 rounded-full text-center placeholder:text-center 
            placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="flex items-center gap-4">
            <Link href="/cart" className="text-white text-sm flex items-center gap-1">
            <ShoppingCart size={18} /> Cart ({cartCount || 2})
            </Link>
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-bold">
            Account
            </Link>
            </div>
            </div>
            
            {/*NavBar*/}
            <nav className="bg-[#0f172a] border-t border-slate-800 px-6 md:px-10 py-3 flex items-center justify-center gap-8 overflow-x-auto
            text-[13px] font-medium">
                   <Link href="/" className="bg-blue-600 text-white px-3 py-1 rounded-md">Home</Link>
                    <Link href="/products" className="text-white hover:text-blue-600">All Products</Link>
                    <Link href="/products?cat=smartphones" className="text-white hover:text-blue-600">Smartphones</Link>
                    <Link href="/products?cat=laptops" className="text-white hover:text-blue-600">Laptops</Link>
                    <Link href="/products?cat=tablets" className="text-white hover:text-blue-600">Tablets</Link>
                    <Link href="/products?cat=smartwatches" className="text-white hover:text-blue-600">Smartwatches</Link>
                    <Link href="/products?cat=accessories" className="text-white hover:text-blue-600">Accessories</Link>
                    <Link href="/#about-us" className="text-white hover:text-blue-600">About Us</Link>
                    <Link href="/#why-choose-us" className="text-white hover:text-blue-600">Why Choose Us</Link>
                    </nav>
                </header>
    );
}