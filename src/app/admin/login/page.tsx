"use client";
import Link from "next/link";
export default function AdminLoginPage() {
  return (
    <div className="bg-slate-950 flex items-center justify-center min-h-screen p-4">
      <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-black text-blue-400 text-center">
          GadgetZone Portal
        </h1>

        <input
          type="text"
          placeholder="Admin Username"
          defaultValue="admin"
          className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          defaultValue="1234"
          className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm"
        />
        <Link href="/admin/dashboard">
        <button className="w-full bg-blue-600 font-bold py-2.5 rounded-lg shadow-lg">
          Login to Panel
        </button>
        </Link>
        <Link href="/" className="block text-center text-xs text-slate-400 hover:text-white mt-3">
        Back to Store
        </Link>

        </div>
    </div>
  );
}