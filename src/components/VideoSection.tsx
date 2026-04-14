export function VideoSection() {
  return (
    <section className="py-16 px-4 bg-hero-bg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-video rounded-xl overflow-hidden bg-section-dark shadow-lg">
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
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Donate on Akshaya Tritiya 2026
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Akshaya Tritiya is the most sacred day of the year — a day when the Sun and Moon are in their most powerful positions. Even the smallest act of charity done on this day gives imperishable (Akshaya) punya.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Don't miss this sacred opportunity to attract everlasting blessings and prosperity.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Receive the divine blessings of the Lord for you and your family — Help us build an iconic temple at Gupt Vrindavan Dham, feed the needy, and protect the lives of <strong>16,000+ abandoned and homeless Gau Mata.</strong>
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#donate" className="bg-donate-btn text-donate-btn-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Donate Now
            </a>
            <button className="text-primary font-semibold underline underline-offset-4">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
