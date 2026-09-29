"use client";
import Link from "next/link"
import { useCart } from "@/app/context/cart-context"

export default function ProductCard({ product }: any) {
    const { addToCart } = useCart();
    return(
        <div className="bg-white rounded-2xl border p-4 shadow-sm flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
            <Link href={`/products/${product.id}`} className="bg-slate-50 rounded-xl h-[200px] flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.name} className="h-full object-contain p-2 group-hover:scale-125 group-hover:rotate-3
            transition duration-700 ease-in-out" />
            </Link>
            <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-3">{product.category}</p>
            <Link href={`/products/${product.id}`} className="font-bold text-slate-900 mt-1 hover:text-sky-600">{product.name}</Link>
            <p className="font-black text-lg mt-1">Rs.{product.price}</p>
            <span className="inline-block bg-emerald-100 text-emerald-600 text-[10px] px-2 py-1 rounded-full mt-2">In Stock</span>
            <div className="flex items-center gap-1 mt-2 text-xs">
                <span className="text-amber-400">★★★★★</span>
                <span className="text-slate-400">(4.8) 124 reviews</span>
            </div>
            <p className="text-[11px] text-slate-500 italic mt-1">"{product.review}"-{product.author}</p>
            <button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-lg py-2 text-sm mt-3 transition">
                Add to Cart
            </button>
        </div>
    )
}