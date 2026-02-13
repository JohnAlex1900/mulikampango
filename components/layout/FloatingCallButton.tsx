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
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110"
      title="Call us for support"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
}
