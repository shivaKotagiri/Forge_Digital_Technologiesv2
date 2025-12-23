import React from 'react';

const SCROLL_ITEMS = [
  "Innovation First",
  "Engineering Excellence",
  "Global Impact",
  "Sustainable Future",
  "Digital Transformation",
  "Next-Gen Solutions"
];

export default function ScrollingTextBar() {
  return (
    <div className="w-full bg-zinc-950 py-2.5 border-y border-white/10 overflow-hidden relative z-10 flex items-center">
      {/* Modern Edge Fades - Matches the dark background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-zinc-950 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-zinc-950 to-transparent"></div>

      <div className="animate-marquee flex whitespace-nowrap items-center">
        {/* Tripled items for a continuous loop */}
        {[...SCROLL_ITEMS, ...SCROLL_ITEMS, ...SCROLL_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center px-6">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white">
              {item}
            </span>
            {/* Modern Subtle Separator */}
            <span className="ml-12 text-zinc-700 font-light text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}