"use client";
import Link from "next/link";
export default function ProductsPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">

      {/* Header */}
      <header className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">
          GadgetZone
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-sm font-semibold">
            🛒 Cart (2)
          </Link>

          <Link
            href="/"
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold"
          >
            👤 Sudesh
          </Link>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Filters */}
        <aside className="bg-white p-6 rounded-xl border border-slate-200 space-y-6">
          <h3 className="font-bold text-lg border-b pb-2">
            Filters
          </h3>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">
              Categories
            </h4>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                defaultChecked
                className="rounded text-blue-600"
              />
              <span>Smartphones</span>
            </label>

            <label className="flex items-center space-x-2 text-sm mt-1">
              <input
                type="checkbox"
                className="rounded text-blue-600"
              />
              <span>Laptops</span>
            </label>

            <label className="flex items-center space-x-2 text-sm mt-1">
              <input
                type="checkbox"
                className="rounded text-blue-600"
              />
              <span>Accessories</span>
            </label>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">
              Availability
            </h4>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                defaultChecked
                className="rounded text-blue-600"
              />
              <span>In Stock Only</span>
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-sm">
            Apply Filters
          </button>
        </aside>

        {/* Products */}
        <div className="md:col-span-3 space-y-4">

          {/* Results and Sort */}
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-slate-600">
              Showing 3 results
            </p>

            <select className="border p-2 rounded-lg text-sm bg-white">
              <option>Sort by: Price (Low to High)</option>
            </select>
          </div>

          {/*Product Grid*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {id:1, name:"Pro Smartphone X12", price:"50000.00",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"},
              {id:2, name:"Galaxy Watch 5", price:"10000.00",img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500"},
              {id:3, name:"Wireless Earbuds Pro", price:"5000.00",img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400"},
            ].map((product)=>(
              <div key={product.id} className="bg-white rounded-xl border p-4 shadow-sm flex flex-col">
                <Link href={"/products/" + product.id} className="h-36 bg-slate-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                <img src={product.img} className="h-full object-contain hover:scale-105 transition" alt={product.name} />
                </Link>
                <h4 className="font-bold">{product.name}</h4>
                <p className="text-blue-600 font-extrabold mt-1">Rs.{product.price}</p>
                <Link href={"/products/" + product.id} className="w-full mt-3 bg-blue-600 text-white font-bold py-1.5 rounded text-sm text-center block">
                View Details</Link>
                <button className="w-full mt-2 bg-sky-500 text-white rounded py-1.5 text-sm">
                  Add to Cart
                </button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


