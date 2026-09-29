"use client";
import Link from "next/link";
export default function AdminDashboardPage() {
  return (
    <div className="bg-slate-100 font-sans min-h-screen">
      <div className="flex">
        <aside className="w-64 bg-slate-900 min-h-screen text-white p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-400">
            GadgetZone Admin
          </h2>

          <nav className="space-y-2 text-sm text-slate-300">
            <Link
              href="/admin"
              className="block p-2 bg-blue-600 rounded font-bold text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/products"
              className="block p-2 hover:bg-slate-800 rounded"
            >
              Products
            </Link>

            <Link
              href="/orders"
              className="block p-2 hover:bg-slate-800 rounded"
            >
              Orders
            </Link>
            <Link
              href="/customers"
              className="block p-2 hover:bg-slate-800 rounded"
            >
              Customers
            </Link>
            <Link href="/" className="block p-2 text-red-300 hover:bg-slate-800 rounded mt-6 border-t border-slate-800 pt-4"> Back to Store
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8 space-y-6">
          <h1 className="text-2xl font-black">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border">
              <p className="text-xs text-slate-500 font-bold">
                TODAY ORDERS
              </p>
              <p className="text-3xl font-black">
                42
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <p className="text-xs text-slate-500 font-bold">
                PENDING PICKUP
              </p>
              <p className="text-3xl font-black text-amber-500">
                14
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <p className="text-xs text-slate-500 font-bold">
                LOW STOCK ALERTS
              </p>
              <p className="text-3xl font-black text-rose-500">
                3
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <p className="font-bold">Recent Orders</p>
            <p className="text-sm text-slate-500 mt-2">#GZ-88901- MacBook Air - Rs.385 000 - Processing </p>
            <p className="text-sm text-slate-500">#GZ-88900 - iPhone 15 - Rs.285 000 - Delivered</p>
          </div>
        </main>
      </div>
    </div>
  );
}