"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cart-context";
import { ShoppingCart, Search, X } from "lucide-react";
import { products } from "@/lib/products-data"; 

export default function Navbar() {
  const { cartCount } = useCart();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showDrop, setShowDrop] = useState(false);

  const filtered = search
   ? products.filter((p: any) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category?.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const close = () => setShowDrop(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const handleSelect = (id: string) => {
    router.push(`/products/${id}`);
    setSearch("");
    setShowDrop(false);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Logo Header */}
      <div className="bg-slate-900 px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 w-9 h-9 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg">G</span>
          </div>
          <span className="text-blue-500 font-extrabold text-xl tracking-wide">GadgetZone</span>
        </Link>

        {/* Search Bar*/}
        <div className="flex-1 max-w-md mx-6 hidden md:block relative">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowDrop(true); }}
              onClick={(e) => { e.stopPropagation(); setShowDrop(true); }}
              onKeyDown={(e) => { if(e.key==='Enter' && search) router.push(`/products?search=${search}`)}}
              placeholder="Search Smartphones, Laptops..."
              className="w-full bg-slate-800 text-white text-sm pl-10 pr-10 py-2 rounded-full text-center placeholder:
              text-center placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Dropdown results */}
          {showDrop && search && (
            <div onClick={(e)=>e.stopPropagation()} className="absolute top-12 w-full bg-white rounded-xl shadow-2xl z-50 overflow-hidden border">
             {filtered.length > 0? filtered.map((p: any) => (
            <div key={p.id} onClick={() => handleSelect(p.id)} className="flex gap-3 p-3 hover:bg-gray-100 cursor-pointer text-black items-center">
            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-md" />
            <div>
        <p className="text-sm font-medium line-clamp-1">{p.name}</p>
        <p className="text-xs text-blue-600 font-bold">Rs.{p.price}</p>
            </div>
            </div>
            )) : (
            <p className="p-4 text-sm text-gray-500 text-center">No gadgets found for "{search}"</p>
            )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="text-white text-sm flex items-center gap-1">
            <ShoppingCart size={18} /> Cart ({cartCount})
          </Link>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-bold">
            Account
          </Link>
        </div>
      </div>
            
            {/*NavBar*/}
            <nav className="bg-slate-800 border-t border-slate-800 px-6 md:px-10 py-1 flex items-center justify-start gap-10 lg:gap-14 xl:gap-16
             text-[16px] font-medium text-bold">
                   <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-bold">Home</Link>
                    <Link href="/products" className="text-white hover:text-blue-600">All Products</Link>
                    <Link href="/#smartphones" className="text-white hover:text-blue-600">Smartphones</Link>
                    <Link href="/#laptops" className="text-white hover:text-blue-600">Laptops</Link>
                    <Link href="/#tablets" className="text-white hover:text-blue-600">Tablets</Link>
                    <Link href="/#smartwatches" className="text-white hover:text-blue-600">Smartwatches</Link>
                    <Link href="/#accessories" className="text-white hover:text-blue-600">Accessories</Link>
                    <Link href="/#about-us" className="text-white hover:text-blue-600">About Us</Link>
                    <Link href="/#why-choose-us" className="text-white hover:text-blue-600">Why Choose Us</Link>
                    </nav>
                </header>
    );
}