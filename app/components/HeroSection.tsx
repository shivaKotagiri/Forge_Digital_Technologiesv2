export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white pt-10 pb-16 md:pt-20 md:pb-24"
    >
      {/* 1. INDUSTRY BACKGROUND: Subtle Grid Pattern */}
       <div className="absolute inset-0 z-0 opacity-[0.03] mask-[linear-gradient(to_bottom,white,transparent)]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start px-6 text-left md:px-10 md:items-center md:text-center">
        
        {/* CONTENT */}
        <div className="flex w-full flex-col items-start space-y-8 md:items-center">
          <div className="space-y-4">
            <p className="inline-block border-x-2 border-blue-600 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Digital Product Studio
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {/* Added 'italic' class below */}
              We design and build <span className="text-blue-600 italic">products</span> <br className="hidden md:block" /> that people love.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              From idea to launch, we help founders and teams ship modern, fast,
              and beautiful web experiences that actually move the needle.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-start gap-6 md:justify-center">
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center bg-zinc-900 px-8 py-4 text-sm font-semibold tracking-widest text-white transition-all hover:bg-blue-600"
            >
              BOOK A FREE STRATEGY CALL
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/work"
              className="text-sm font-semibold tracking-widest text-zinc-900 underline decoration-blue-600 decoration-2 underline-offset-8 transition-colors hover:text-blue-600"
            >
              VIEW RECENT WORK
            </a>
          </div>

          {/* SOCIAL PROOF: Modern Status Section */}
          <div className="flex flex-col items-center gap-6 border-t border-zinc-100 pt-10 md:flex-row md:gap-8">
            
            {/* 1. Avatar Pile */}
            <div className="flex items-center -space-x-4">
               {/* Avatar 1 */}
               <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-zinc-200">
                  <svg className="h-6 w-6 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
               </div>
               {/* Avatar 2 */}
               <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-blue-100">
                  <span className="font-bold text-blue-600">JD</span>
               </div>
               {/* Avatar 3 */}
               <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-zinc-900">
                  <span className="font-bold text-white">MK</span>
               </div>
               {/* Avatar 4: Count */}
               <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-zinc-100">
                  <span className="text-xs font-bold text-zinc-600">+20</span>
               </div>
            </div>

            {/* 2. Rating & Text */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 fill-blue-600 text-blue-600" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                <span className="font-bold text-zinc-900">4.9/5 Rating</span> from 25+ Clients
              </p>
            </div>

          </div>
        </div>

        {/* Subtle Decorative Glow (Center Bottom) */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>
    </section>
  );
}
