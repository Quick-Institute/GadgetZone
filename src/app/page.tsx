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

      {/*About Us Section*/}
      <section id="about-us" className="mt-16 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          GadgetZone is your trusted destination for smartphones, laptops, tablets, smartwatches and electronics in Sri Lanka.
          We provide best products with fast home delivery.
        </p>
      </section>

      </main>
  )
}
