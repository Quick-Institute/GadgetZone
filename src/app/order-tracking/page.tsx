"use client";
import Link from "next/link";
export default function OrderTrackingPage() {
  return (
    <div className="bg-slate-50 p-8 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border shadow-md space-y-6">
        
        {/* Page Title */}
        <h2 className="text-2xl font-black">
          Tracking Order #GZ-88901
        </h2>

        {/* Order Status */}
        <div className="flex items-center justify-between text-xs font-bold text-blue-600">
          <span className="bg-blue-100 p-2 rounded-full">
            Processing
          </span>

          ===&gt;

          <span className="bg-blue-100 p-2 rounded-full">
            Shipped
          </span>

          ===&gt;

          <span className="text-slate-400">
            Out for Delivery
          </span>
        </div>

        {/* Tracking Timeline */}
        <div className="border-t pt-4 text-xs space-y-2 text-slate-600">
          <p>
            • Sept 12, 11:30 AM: Order confirmed &amp; assigned status "Processing"
          </p>

          <p>
            • Sept 13, 09:00 AM: Order packed and marked "Shipped"
          </p>
        </div>
        <Link href="/"><button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-xl">Back to Home</button></Link>
      </div>
    </div>
  );
}

