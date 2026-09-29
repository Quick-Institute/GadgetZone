"use client";
import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext<any>(null);
export function CartProvider({ children }: { children: any }) {
    const [cart, setCart] = useState<any[]>([]);
    useEffect(()=> {
        const saved = localStorage.getItem("cart");
        if (saved) {
            setCart(JSON.parse(saved));
        }
    },[]);
    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product: any) => {
        setCart((prev) => [...prev, product]);
    };
    const removeFromCart = (id: any) => {
        setCart((prev) => prev.filter((p) =>p.id!== id));
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}

