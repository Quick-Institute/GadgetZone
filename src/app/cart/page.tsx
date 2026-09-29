"use client";
import { useCart } from "../context/cart-context";
export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  return (
    <div className="p-8">
      
    {/* Page Title */}
        <h1 className="text-2xl font-bold mb-6">
          Shopping Cart
        </h1>
        {cart.length === 0 ?
          <p>Your Cart is empty</p> : (
         <div>
          {cart.map((item: any) => (
            <div key={item.id} className="border p-3 mb-2 flex justify-between">
              <span>{item.name} - Rs.{item.price}</span>
              <span className="text-red-600 font-bold cursor-pointer" onClick={() => removeFromCart(item.id)}>Remove</span>
              </div>
          ))}
          </div>
          )}
          </div>
  );
}


