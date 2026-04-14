import mandirNirman from "@/assets/mandir-nirman.jpg";

interface TempleSectionProps {
  onDonate: () => void;
}

export function TempleSection({ onDonate }: TempleSectionProps) {
  return (
    <section className="py-20 px-4 bg-temple-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-saffron) 0%, transparent 60%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-72 md:h-auto">
            <img
              src={mandirNirman}
              alt="Radha Krishna Temple Construction"
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-temple-dark/50 md:block hidden" />
          </div>
          <div className="bg-gradient-to-br from-temple-brown to-temple-dark p-10 md:p-14 flex flex-col justify-center">
            <span className="text-saffron text-sm font-bold uppercase tracking-[0.2em]">Special Cause</span>
            <h2 className="text-2xl md:text-3xl font-bold text-cream mt-4 mb-4 leading-tight">
              Donate for Construction of Radha Krishna Temple
            </h2>
            <p className="text-cream/70 mb-8 leading-relaxed">
              Receive Maha Prasadam at your home. Help build the largest temple in Rajasthan — a beacon of spirituality and community service.
            </p>
            <button
              onClick={onDonate}
              className="bg-saffron text-temple-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-saffron-light transition-colors w-fit shadow-lg shadow-saffron/30"
            >
              Donate Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
