export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/public/subagency-bg.jpg)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
      
      <main className="relative z-10 text-center px-8">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-[0.02em] text-white mb-6 select-none">
          subagencys
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.08em] text-cyan-100/80 opacity-90">
          Where presence is everything.
        </p>
      </main>
    </div>
  );
}
