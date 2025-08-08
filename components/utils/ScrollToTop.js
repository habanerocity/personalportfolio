"use client";
import { useEffect } from "react";
import React from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Force scroll to top on mount
      console.log('scrolling to top...');
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
}