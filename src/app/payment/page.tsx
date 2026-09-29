"use client";
import Link from "next/link";
export default function PaymentPage() {
  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-2xl border shadow-md max-w-md w-full space-y-4">
        
        {/* Page Title */}
        <h2 className="text-xl font-black border-b pb-3">
          Payment Details
        </h2>

        {/* Total Amount */}
        <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center">
          <span className="text-sm font-bold">
            Total Amount Due:
          </span>

          <span className="text-2xl font-black text-blue-600">
            Rs.50000.00
          </span>
        </div>

        {/* Payment Form */}
        <form className="space-y-3">
          
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full p-2.5 border rounded-lg text-sm"
          />

          <input
            type="text"
            placeholder="Card Number (XXXX XXXX XXXX XXXX)"
            className="w-full p-2.5 border rounded-lg text-sm"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="MM / YY"
              className="p-2.5 border rounded-lg text-sm"
            />

            <input
              type="text"
              placeholder="CVV"
              className="p-2.5 border rounded-lg text-sm"
            />
          </div>

          <Link href="/order-confirmation">
          <button
            type="button"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md">
            Confirm & Pay
          </button></Link>
        </form>

      </div>
    </div>
  );
}

