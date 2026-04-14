export function QuoteSection() {
  return (
    <section id="about" className="py-20 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-saffron text-4xl">✦</span>
          <h2 className="text-4xl md:text-5xl font-bold text-temple-brown mt-4">
            Akshaya Tritiya Donation 2026
          </h2>
        </div>
        <div className="relative bg-parchment rounded-3xl p-8 md:p-14 shadow-inner">
          <div className="absolute top-6 left-8 text-7xl text-saffron/30 font-serif leading-none select-none">"</div>
          <div className="relative z-10 text-center space-y-6">
            <p className="text-temple-brown/70 text-base md:text-lg italic tracking-wide">
              यत्किञ्चिद्दीयते दानं स्वल्पं वा यदि वा बहु । तत्सर्वमक्षयं स्याद्वै तेनेयमक्षया स्मृता ।।
            </p>
            <div className="w-16 h-0.5 bg-saffron mx-auto" />
            <p className="text-temple-brown text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Whatever charity is given on this day, whether it is very little or abundant, all of it certainly becomes
              <strong className="text-saffron"> inexhaustible (Akshaya).</strong> Even a small contribution brings <em>Akshaya Punya</em> and attracts unlimited blessings of Lord's
              for you and your family.
            </p>
          </div>
          <div className="absolute bottom-6 right-8 text-7xl text-saffron/30 font-serif leading-none select-none rotate-180">"</div>
        </div>
      </div>
    </section>
  );
}
