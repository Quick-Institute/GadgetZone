"use client";
import Link from "next/link";
export default function ProfilePage() {
  return (
    <div className="bg-slate-50 p-8 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border shadow-md space-y-4">
        
        {/* Page Title */}
        <div className="flex justify-between  items-center border-b pb-2">
        <h2 className="text-2xl font-black border-b pb-2">
          My Profile </h2>
          <Link href="/" className="text-sm text-slate-500 hover:text-black">Home</Link></div>

        {/* Profile Form */}
        <form className="space-y-3">
          <div>
            <label className="text-xs font-bold">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Sudesh Jayasundara"
              className="w-full p-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-bold">
              Email
            </label>

            <input
              type="email"
              defaultValue="sudesh@gamil.com"
              className="w-full p-2 border rounded-lg text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg text-sm"
          >
            Update Profile
          </button>
        </form>
      {/*Linking Part*/}
      <div className="pt-4 space-y-2">
        <Link href="/orders" className="block">
        <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg text-sm hover:bg-black">My Orders</button>
        </Link>
      <div className="flex gap-2">
        <Link href="/" className="flex-1">
        <button className="w-full border border-slate-300 py-2 rounded-lg text-sm">Logout</button>
        </Link>
      </div>

      </div>

      </div>
    </div>
  );
}

