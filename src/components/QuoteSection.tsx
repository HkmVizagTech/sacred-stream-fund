export function QuoteSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Akshaya Tritiya Donation 2026
        </h2>
        <div className="relative border-2 border-quote-border rounded-lg p-8 md:p-12">
          <span className="absolute -top-6 left-4 text-6xl text-quote-border font-serif">"</span>
          <p className="text-foreground/80 text-sm md:text-base mb-4 font-medium">
            यत्किञ्चिद्दीयते दानं स्वल्पं वा यदि वा बहु । तत्सर्वमक्षयं स्याद्वै तेनेयमक्षया स्मृता ।।
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            <strong>Whatever charity is given on this day, whether it is very little or abundant, all of it certainly becomes
            inexhaustible (Akshaya).</strong> Even a small contribution brings <em>Akshaya Punya</em> and attracts unlimited blessings of Lord's
            for you and your family.
          </p>
          <span className="absolute -bottom-6 right-4 text-6xl text-quote-border font-serif">"</span>
        </div>
      </div>
    </section>
  );
}
