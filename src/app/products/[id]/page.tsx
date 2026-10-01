"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/lib/products-data";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  
  const product = products.find((p:any) => String(p.id) === String(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found: {id}</div>;
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/products" className="text-blue-600 font-bold mb-6 inline-block">
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow p-8 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.name} className="h-full object-contain" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{product.category}</p>
            <h1 className="text-3xl font-extrabold mt-2">{product.name}</h1>
            <p className="text-3xl font-extrabold text-blue-600 mt-4">Rs.{product.price}</p>
            {/* Use review field - you don't have description */}
            <p className="text-slate-500 mt-4">Review: {product.review}</p>
            <p className="text-slate-400 text-sm mt-2">By: {product.author}</p>
            <p className="mt-6 text-sm">Product ID from URL: <span className="font-bold text-blue-600">{params.id}</span></p>

            <button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-lg">
              Add to Cart
            </button>
            <button className="w-full mt-3 border-2 border-slate-200 font-bold py-3 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}