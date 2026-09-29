"use client";
import { useState, useEffect } from "react";
export default function WhatsappButton() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        setTimeout(() => setShow(true), 800);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const phone = "0778643591";
    const msg = "Hi! I want to know about your products";
    if (!show) return null;
    return (
        <a href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-[9999] bg-[25D366] hover:bg-[#128C7E] w-14 h-14 flex items-center justify-center rounded-full
        shadow-2xl transition-all hover:scale-110">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8"/>
        </a>
    );
}