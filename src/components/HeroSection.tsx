import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Akshaya Tritiya 2026"
          width={1920}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/90 via-hero-bg/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            अक्षय
            <br />
            तृतीया
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mt-2 italic">पावन अवसर</p>
          <p className="text-primary font-semibold mt-6 text-base md:text-lg max-w-lg">
            गौ सेवा | अन्नदान सेवा | मंदिर निर्माण
          </p>
          <p className="text-foreground/80 mt-2 max-w-lg text-sm md:text-base">
            दान कर पाएं संपन्नता, सुख-शांति व अक्षय पुण्य का वरदान।
            <br />
            पुण्य प्राप्ति का यह दुर्लभ अवसर न गंवाएं!
          </p>
          <a
            href="#donate"
            className="mt-8 inline-flex items-center justify-center bg-donate-btn text-donate-btn-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity w-fit border-2 border-hero-gold"
          >
            अभी दान करें
          </a>
        </div>
      </div>
    </section>
  );
}
