"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const allProducts= [
     {id:1, name:"Pro Smartphone X12", price:"50000.00", cat: "SMARTPHONES", img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", desc: "Latest smartphone with pro camera."},
      {id:2, name:"Galaxy Watch 5", price:"10000.00", cat: "WATCHES", img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", desc: "Smart watch with health tracking."},
      {id:3, name:"Wireless Earbuds Pro", price:"5000.00", cat: "AUDIO", img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400", desc:"Premium sound with noice cancellation."},
  ];
  const product = allProducts.find(p => p.id.toString() === params.id) || allProducts[0];
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/products" className="text-blue-600 font-bold mb-6 inline-block">
        Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow p-8 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
            <img src={product.img} alt={product.name} className="h-full object-contain" />
          </div>
        <div>
        <p className="text-xs text-slate-400 font-bold tracking-widest">{product.cat}</p>
        <h1 className="text-3xl font-extrabold mt-2">{product.name}</h1>
        <p className="text-3xl font-etrabold text-blue-600 mt-4">Rs.{product.price}</p>
        <p className="text-slate-500 mt-4">{product.desc}</p>
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

