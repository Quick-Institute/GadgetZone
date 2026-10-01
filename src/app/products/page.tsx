"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/lib/products-data";

export default function ProductsPage() {
  const [cats, setCats] = useState<string[]>([]);
  const [sort, setSort] = useState("low");

  const toggle = (c:string) => {
    setCats(prev => prev.includes(c) ? prev.filter(x=>x!==c) : [...prev,c]);
  };

  const filtered = useMemo(() => {
    let list:any[] = [...products];
    
    if (cats.length > 0) {
      list = list.filter(p => cats.includes(p.category));
    }

    if (sort === "low") list.sort((a,b)=> Number(a.price) - Number(b.price));
    if (sort === "high") list.sort((a,b)=> Number(b.price) - Number(a.price));
    if (sort === "name") list.sort((a,b)=> a.name.localeCompare(b.name));
    
    return list;
  }, [cats, sort]);

  const allCats = ["Smartphones","Laptops","Smartwatches","Tablets","Accessories"];

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <aside className="bg-white p-6 rounded-xl border border-slate-200 space-y-6 h-fit">
        <h3 className="font-bold text-lg border-b pb-2">Filters</h3>
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">Categories</h4>
          {allCats.map(c=>(
            <label key={c} className="flex items-center space-x-2 text-sm mt-2 cursor-pointer">
              <input type="checkbox" checked={cats.includes(c)} onChange={()=>toggle(c)} className="rounded text-blue-600" />
              <span>{c}</span>
            </label>
          ))}
        </div>
        <button onClick={()=>setCats([])} className="w-full bg-slate-100 font-bold py-2 rounded-lg text-sm">Clear Filters</button>
      </aside>

      <div className="md:col-span-3 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold text-slate-600">Showing {filtered.length} of {products.length} results</p>
          <select value={sort} onChange={e=>setSort(e.target.value)} className="border p-2 rounded-lg text-sm bg-white">
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product:any)=>(
            <div key={product.id} className="bg-white rounded-xl border p-4 shadow-sm flex flex-col">
              <Link href={"/products/" + product.id} className="h-36 bg-slate-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                <img src={product.image} className="h-full object-contain hover:scale-105 transition" alt={product.name} />
              </Link>
              <p className="text-xs text-slate-400">{product.category}</p>
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-blue-600 font-extrabold text-sm mt-1">Rs.{product.price}</p>
              <Link href={"/products/" + product.id} className="w-full mt-3 bg-blue-600 text-white font-bold py-1.5 rounded text-sm text-center">View Details</Link>
              <button className="w-full mt-2 bg-sky-500 text-white rounded py-1.5 text-sm">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}