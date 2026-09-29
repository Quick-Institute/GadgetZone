export default function Hero() {
    return (
        <div className="bg-gradient-to-br from-blue-900  via-blue-700 to-cyan-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row
        items-center justify-between mt-6">
            <div className="flex-1">
                <span className="bg-orange-300 text-black text-xs font-bold px-4 py-1 rounded-full">NEW ARRIVAL</span>
                <h1 className="text-4xl md:text-5xl font-black text-white mt-4 leading-tight">Next-Gen Tech<br/>
                Arsenal</h1>
                <p className="text-blue-100 text-sm mt-3">Order Online for fast Home Delivery or convenient
                    <span className="font-bold text-white">Store Pickup in Colombo.</span>
                </p>
                <div className="flex items-center gap-4 mt-6">
                    <button className="bg-orange-300 hover:bg-orange-400 text-black font-bold px-6 py-3 rounded-lg">Shop Now</button>
                    <div className="text-white">
                        <p className="text-xs text-blue-200">Starting from</p>
                        <p className="font-black text-lg">Rs.8999.00</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-end mt-6 md:mt-0">
                <div className="bg-white/20 p-2 rounded-xl">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" alt="Headphones"
                className="w-[350px] h-[220px] object-cover rounded-lg bg-[#f5c66e]" />
                </div>
            </div>
        </div>
    )
}