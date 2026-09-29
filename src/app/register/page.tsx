"use client";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-blue-600">
            GadgetZone
          </h1>

          <h2 className="text-xl font-bold text-slate-800 mt-2">
            Create Account
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Join to buy products via Home Delivery or Store Pickup
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Sudesh Jayasundara"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Email Address
            </label>

            <input
              type="email"
              placeholder="sudesh@gmail.com"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="0778643591"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Delivery Address
            </label>

            <input
              type="text"
              placeholder="123 Kurunegala, Sri Lanka"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition"
          >
            Register Account
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-4">
          Already have an account?
          <Link href="/login"
            className="text-blue-600 font-bold hover:underline">
            Log In </Link>
        </p>
        <Link href="/" className="block text-center mt-2 text-sm text-black-100 text-slate-400">Back to Home</Link>
      </div>
    </div>
  );
}