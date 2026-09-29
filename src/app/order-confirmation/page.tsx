"use client";
import Link from "next/link";
export default function OrderConfirmationPage() {
  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-2xl border shadow-md max-w-md w-full text-center space-y-4">
        
        {/* Success Icon */}
        <div className="text-5xl">
          ✅
        </div>

        {/* Order Confirmation */}
        <h2 className="text-2xl font-black text-slate-800">
          Order Confirmed!
        </h2>

        <p className="text-sm text-slate-500">
          Order ID:{" "}
          <b className="text-slate-800">
            #GZ-88901
          </b>
        </p>

        {/* Order Details */}
        <div className="bg-slate-50 p-4 rounded-xl text-left text-xs space-y-2 border">
          <p>
            <b>Fulfillment:</b> Home Delivery
          </p>

          <p>
            <b>Status:</b> Processing
          </p>

          <p>
            <b>Total Paid:</b> Rs.385 000.00
          </p>
        </div>

        {/* Track Order */}
        <Link href="/order-tracking">
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl">
          Track Order
        </button></Link>
        <Link href="/">
        <button className="w-full mt-3 border border-slate-300 font-bold py-3 rounded-xl">Continue Shopping</button>
        </Link>

      </div>
    </div>
  );
}

