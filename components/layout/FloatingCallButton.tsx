"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after page loads
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:+254704000004"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6767] shadow-2xl shadow-[#ff6767]/35 transition-all duration-200 hover:scale-110 hover:bg-[#ff7b7b]"
      title="Call us for support"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
}
