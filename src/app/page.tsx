import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/products-data"
import Link from "next/link"

export default function Home() {
  const getByCategory = (cat: string) =>{
    return products.filter(p =>
      p.category.toLowerCase() === cat.toLowerCase() ||
      (cat === "Smartwatches" && p.category.toLowerCase().includes("smartwatch"))
    )
  }
  const categories = ["Smartphones", "Laptops", "Tablets", "Smartwatches", "Accessories"];
  return(
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-2 bg-white">

      <Hero />
      <h2 className="text-2xl font-bold mt-10 mb-6">Featured Products</h2>

      {categories.map(cat => (
        <div key={cat} id={cat.toLowerCase()} className="mt-12 scroll-mt-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{cat}</h2>
            <p className="text-sm text-slate-500 hidden md:block">Explore our latest {cat}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getByCategory(cat).slice(0, 3).map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="flex justify-center mt-8 mb-4">
            <Link href="/products" className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-lg text-sm font-medium transition">
            See More {cat}
            </Link>
          </div>
        </div>
      ))}

     {/* About Us */}
<section id="about-us" className="mt-20">
  <div className="bg-gradient-to-r from-blue-900 to-cyan-600 rounded-3xl overflow-hidden grid md:grid-cols-2 items-center text-white">
    <div className="p-8 md:p-12">
      <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">SINCE 2020 - KURUNEGALA</span>
      <h2 className="text-4xl font-extrabold mt-4 leading-tight">We Bring Future Tech To Your Doorstep</h2>
      <p className="mt-4 text-blue-100 text-sm leading-relaxed">GadgetZone is your trusted destination for Smartphones, Laptops, Tablets,
         Smartwatches and Accessories in Sri Lanka. Best price, warranty, fast island-wide delivery.</p>
      <div className="flex gap-6 mt-6">
        <div><p className="text-xl font-extrabold">18K+</p><p className="text-xs opacity-70">Customers</p></div>
        <div><p className="text-xl font-extrabold">4.9/5</p><p className="text-xs opacity-70">Rating</p></div>
        <div><p className="text-xl font-extrabold">24h</p><p className="text-xs opacity-70">Delivery</p></div>
      </div>
    </div>
    <img src="/store.jpg" alt="gadgetzone shop" className="h-80 w-full object-cover" alt="store" />
  </div>
</section>

{/* Why Choose Us*/}
<section id="why-choose-us" className="mt-16 py-12">
  <h2 className="text-3xl font-bold text-center">Why Choose GadgetZone?</h2>
  <p className="text-center text-slate-500 text-sm mt-2">Not just selling — we make tech life easy</p>
  
  <div className="grid md:grid-cols-3 gap-6 mt-8">
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
      <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800" className="w-full h-32 object-cover rounded-xl mb-4" alt="" />
      <h3 className="font-bold">💰 Best Price Guarantee</h3>
      <p className="text-sm text-slate-600 mt-2">Lowest price in SL. Found lower? We match it.</p>
    </div>
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
      <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" className="w-full h-32 object-cover rounded-xl mb-4" alt="" />
      <h3 className="font-bold">⚡ Fast Home Delivery</h3>
      <p className="text-sm text-slate-600 mt-2">Cash on Delivery, Card, Koko. Live order tracking.</p>
    </div>
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
      <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400" className="w-full h-32 object-cover rounded-xl mb-4" alt="" />
      <h3 className="font-bold">💬 24/7 WhatsApp Support</h3>
      <p className="text-sm text-slate-600 mt-2">Real human support in Sinhala, Tamil, English.</p>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-4 mt-6">
    <div className="bg-slate-900 text-white p-5 rounded-2xl"><p className="font-bold">📦 Store Pickup</p><p className="text-xs opacity-70 mt-1">Kurunegala same-day pickup</p></div>
    <div className="bg-slate-900 text-white p-5 rounded-2xl"><p className="font-bold">🔒 Secure Payments</p><p className="text-xs opacity-70 mt-1">Trusted by 18k+ customers</p></div>
    <div className="bg-yellow-400 text-black p-5 rounded-2xl"><p className="font-bold">🎁 100% Genuine</p><p className="text-xs mt-1">Original with company warranty</p></div>
  </div>
</section>

      </main>
  )
}
