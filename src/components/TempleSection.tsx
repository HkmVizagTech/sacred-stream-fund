import mandirNirman from "@/assets/mandir-nirman.jpg";

interface TempleSectionProps {
  onDonate: () => void;
}

export function TempleSection({ onDonate }: TempleSectionProps) {
  return (
    <section className="py-16 px-4 bg-section-dark">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Donate for Construction of Radha Krishna Temple
            </h2>
            <p className="text-muted-foreground mb-6">
              Receive Maha Prasadam at your home.
            </p>
            <button
              onClick={onDonate}
              className="bg-donate-btn text-donate-btn-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
            >
              Donate Now
            </button>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src={mandirNirman}
              alt="Radha Krishna Temple Construction"
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
