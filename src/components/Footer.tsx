export default function Footer() {
    return(
         <footer className="bg-slate-900 text-slate-300 mt-12">
              <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/*Brand*/}
                <div>
                <h2 className="text-2xl font-black text-sky-400 mb-3">GadgetZone</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                Your trusted online destination for smartphones, laptops, tablets, smartwatches and other electronics.</p>
                </div>
              {/* Shop */}
              <div>
                <h3 className="text-white font-bold mb-4">Shop</h3>
                <div className="space-y-2 text-sm">
                  <a href="/#smartphones" className="block hover:text-sky-400">Smartphones</a>
                  <a href="/#laptops" className="block hover:text-sky-400">Laptops</a>
                  <a href="/#tablets" className="block hover:text-sky-400">Tablets</a>
                  <a href="/#smartwatches" className="block hover:text-sky-400">Smartwatches</a>
                  <a href="/#accessories" className="block hover:text-sky-400">Accessories</a>
                </div>
              </div>

              {/*Customer Service*/}
              <div>
                <h3 className="text-white font-bold mb-4">Customer Service</h3>
                <div className="space-y-2 text-sm">
                  <a href="/#contact" className="block hover:text-sky-400">Contact Us</a>
                  <a href="/order-tracking" className="block hover:text-sky-400">Delivery Information</a>
                  <a href="/order-tracking" className="block hover:text-sky-400">Store Pickup</a>
                  <a href="/orders" className="block hover:text-sky-400">Returns & Refunds</a>
                  <a href="/faq" className="block hover:text-sky-400">FAQ</a>
                </div>
              </div>

              {/*Contact*/}
              <div>
                <h3 className="text-white font-bold mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm text-slate-400">
                  <p>Kurunegala, Sri Lanka</p>
                  <p> 0778643591</p>
                  <p>support@gadgetzone@gmail.com</p>
                  <p>Mon-Sat: 9.00 AM - 5.00 PM</p>
              </div>

              {/*Social Madia*/}
              <div className="mt-5">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                    aria-label="Facebook">f
                  </a>
                  <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition"
                  aria-label="Instragram">
                    ◎
                  </a>
                  <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-black transition"
                  aria-label="TikTok">
                   ♪ 
                  </a>
                  <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition"
                  aria-label="YouTube">
                    ▶
                  </a>

                </div>

              </div>
              </div>
            </div>

            {/*Bottom*/}
            <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-sm text-slate-500"> © 2026 GadgetZone. All Rights Reserved.</p>
              <div className="flex space-x-5 text-sm">
                <a className="hover:text-sky-400">Privacy Policy</a>
                <a className="hover:text-sky-400">Terms & Conditions</a>
                <a href="/admin/login" className="hover:text-sky-400 text-amber-400 font-bold">Admin Portal</a>
            </div>
            </div>
              </div>
            </footer>
  );
}