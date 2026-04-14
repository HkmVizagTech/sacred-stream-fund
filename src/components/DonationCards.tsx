import akshayaSeva from "@/assets/akshaya-seva.jpg";
import gauSeva from "@/assets/gau-seva.jpg";
import mandirNirman from "@/assets/mandir-nirman.jpg";
import chandanSeva from "@/assets/chandan-seva.jpg";
import annaSeva from "@/assets/anna-seva.jpg";

const categories = [
  { name: "Akshaya Tritiya Seva", image: akshayaSeva, desc: "Earn imperishable Akshaya Punya" },
  { name: "Gau Seva", image: gauSeva, desc: "Protect 16,000+ abandoned Gau Mata" },
  { name: "Mandir Nirman Seva", image: mandirNirman, desc: "Build Rajasthan's largest temple" },
  { name: "Chandan Alankar Seva", image: chandanSeva, desc: "Adorn the deity with sandalwood" },
  { name: "Khichdi Vitaran Seva", image: annaSeva, desc: "Distribute food to the needy" },
  { name: "Annadana Seva", image: annaSeva, desc: "Feed devotees and the underprivileged" },
];

interface DonationCardsProps {
  onDonate: (sevaType: string) => void;
}

export function DonationCards({ onDonate }: DonationCardsProps) {
  return (
    <section id="seva" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-saffron">Choose Your Seva</span>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-brown mt-3">
            Akshaya Tritiya Daan
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-temple-dark/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-temple-brown font-bold text-lg">{cat.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{cat.desc}</p>
                <button
                  onClick={() => onDonate(cat.name)}
                  className="mt-4 w-full bg-saffron text-temple-dark py-2.5 rounded-full font-bold text-sm hover:bg-saffron-light transition-colors"
                >
                  Donate for {cat.name.split(" ")[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
