export function VideoSection() {
  return (
    <section className="py-20 px-4 bg-temple-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, var(--color-saffron) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-amber-warm) 0%, transparent 50%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cream">
            Donate for <span className="text-saffron">Everlasting Blessings</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-saffron/10 ring-1 ring-saffron/20">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Akshaya Tritiya 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="md:col-span-2 space-y-5">
            <p className="text-cream/80 leading-relaxed">
              Akshaya Tritiya is the most sacred day of the year — a day when the Sun and Moon are in their most powerful positions.
            </p>
            <p className="text-cream/80 leading-relaxed">
              Help us build an iconic temple at Gupt Vrindavan Dham, feed the needy, and protect the lives of <strong className="text-saffron">16,000+ abandoned and homeless Gau Mata.</strong>
            </p>
            <a href="#seva" className="inline-block bg-saffron text-temple-dark px-8 py-3 rounded-full font-bold hover:bg-saffron-light transition-colors mt-4">
              Start Your Seva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
