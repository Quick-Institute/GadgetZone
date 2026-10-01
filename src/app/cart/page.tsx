"use client";
import { useCart } from "../context/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartCount } = useCart() as any;
const subtotal = cart.reduce((sum: number, item: any) => {
  return sum + Number(item.price) * Number(item.quantity || 1);
}, 0); 
const delivery = cart.length > 0? 500 : 0;
const total = subtotal + delivery;

if (cart.length === 0) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="text-7xl mb-4">🛒</div>
      <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
      <p className="text-gray-500 mb-6">Looks like you haven't added any products yet.</p>
      <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700">
      Continue Shopping </Link>
    </div>
  );
}

return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart <span className="text-blue-600">({cartCount} items)</span></h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/*Left-Items*/}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item: any) => (
            <div key={item.id} className="bg-white border rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition">
              <img src={item.image || "/store.jpg"} className="w-24 h-24 object-cover rounded-xl bg-gray-100" alt={item.name} />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category || "Product"}</p>
                <p className="text-blue-600 font-bold mt-1">Rs. {item.price} </p>
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => updateQuantity? updateQuantity(item.id, (item.quantity||1)-1) : null}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">-</button>
                  <span className="font-bold w-6 text-center">{item.quantity || 1}</span>
                   <button onClick={() => updateQuantity? updateQuantity(item.id, (item.quantity||1)+1) : null}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">+</button>
                  </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <span onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold cursor-pointer hover:underline">Remove</span>
                    <p className="font-bold">Rs. {item.price * (item.quantity||1)}</p>
                  </div>
                  </div>
          ))}
          </div>
          {/*Right - Summary*/}
          <div className="bg-gray-50 rounded-2xl p-6 h-fit border">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>Rs. {delivery}</span></div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>Total</span><span
              className="text-blue-600">Rs. {total}</span></div>
            </div>
            <Link href="/checkout" className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-bold
            text-center block hover:shadow-lg">Proceed to Checkout</Link>
             <Link href="/products" className="mt-3 w-full bg-white border py-3 rounded-full font-bold text-center block">Continue Shopping</Link>
             <p className="text-xs text-gray-400 mt-4 text-center">Secure checkout . 2-year warranty . Free returns</p>
          </div>
          </div>
          </div>
);
}
   