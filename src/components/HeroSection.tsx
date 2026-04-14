import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
      <img
        src={heroBanner}
        alt="Akshaya Tritiya 2026"
        width={1920}
        height={800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-temple-dark via-temple-dark/60 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-20 pt-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-saffron/20 text-saffron px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-saffron/30">
            पावन अवसर • Akshaya Tritiya 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] tracking-tight">
            अक्षय
            <br />
            <span className="text-saffron">तृतीया</span>
          </h1>
          <p className="text-cream/80 mt-6 text-lg md:text-xl leading-relaxed max-w-lg">
            गौ सेवा | अन्नदान सेवा | मंदिर निर्माण — दान कर पाएं संपन्नता, सुख-शांति व अक्षय पुण्य का वरदान।
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#seva"
              className="bg-saffron text-temple-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-saffron-light transition-colors shadow-xl shadow-saffron/30"
            >
              अभी दान करें →
            </a>
            <a
              href="#about"
              className="border-2 border-cream/30 text-cream px-8 py-4 rounded-full text-lg font-semibold hover:border-cream/60 transition-colors backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
