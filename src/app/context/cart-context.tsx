"use client";
import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: any }) {
    const [cart, setCart] = useState<any[]>([]);

    //Load from localstorage
    useEffect(()=> {
        const saved = localStorage.getItem("cart");
        if (saved) {
            setCart(JSON.parse(saved));
        }
    },[]);

    //Save to lacalstorage
    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    //Add with quantity check
    const addToCart = (product: any) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);
            if (existing) {
                return prev.map((p) => p.id === product.id? {...p, quantity: (p.quantity||1)+1} :p);
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    //Remove
    const removeFromCart = (id: any) => {
        setCart((prev) => prev.filter((p) =>p.id!== id));
    };

    //Update quantity
    const updateQuantity = (id: any, qty: number) => {
        if (qty < 1) {
            removeFromCart(id);
            return;
        }
        setCart((prev) => prev.map((p) => p.id === id? {...p, quantity: qty} : p));
    };
    const clearCart = () => setCart([]);
    const cartCount = cart.reduce((sum, item) => sum + (item.quantity||1), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}>
            {children}</CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}

