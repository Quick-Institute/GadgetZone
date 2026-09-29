"use client";
import Link from "next/link";
export default function CheckoutPage() {
  return (
    <div className="bg-slate-50 p-8 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border shadow-md space-y-6">
        
        {/* Page Title */}
        <h2 className="text-2xl font-black border-b pb-4">
          Checkout
        </h2>

        {/* Fulfillment Method */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-slate-700">
            1. Select Fulfillment Method
          </h3>

          <div className="grid grid-cols-2 gap-4">
            
            {/* Home Delivery */}
            <label className="border-2 border-blue-600 p-4 rounded-xl flex flex-col cursor-pointer bg-blue-50/50">
              <span className="font-bold text-blue-900">
                🚚 Home Delivery
              </span>

              <span className="text-xs text-slate-500">
                Shipped directly to you
              </span>
            </label>

            {/* Store Pickup */}
            <label className="border-2 border-slate-200 p-4 rounded-xl flex flex-col cursor-pointer hover:border-blue-300">
              <span className="font-bold text-slate-800">
                🏬 Store Pickup
              </span>

              <span className="text-xs text-slate-500">
                Collect at physical store
              </span>
            </label>

          </div>
        </div>

        {/* Delivery Address */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-slate-700">
            2. Delivery Address
          </h3>

          <input
            type="text"
            placeholder="Street Address"
            className="w-full p-2.5 border rounded-lg text-sm"
          />
        </div>

        {/* Payment Button */}
        <Link href="/payment">
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl">
          Proceed to Payment
        </button></Link>

      </div>
    </div>
  );
}
