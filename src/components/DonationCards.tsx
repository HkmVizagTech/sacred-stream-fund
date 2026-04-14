import akshayaSeva from "@/assets/akshaya-seva.jpg";
import gauSeva from "@/assets/gau-seva.jpg";
import mandirNirman from "@/assets/mandir-nirman.jpg";
import chandanSeva from "@/assets/chandan-seva.jpg";
import annaSeva from "@/assets/anna-seva.jpg";

const categories = [
  { name: "Akshaya Tritiya Seva", image: akshayaSeva },
  { name: "Gau Seva", image: gauSeva },
  { name: "Mandir Nirman Seva", image: mandirNirman },
  { name: "Chandan Alankar Seva", image: chandanSeva },
  { name: "Khichdi Vitaran Seva", image: annaSeva },
  { name: "Annadana Seva", image: annaSeva },
];

interface DonationCardsProps {
  onDonate: (sevaType: string) => void;
}

export function DonationCards({ onDonate }: DonationCardsProps) {
  return (
    <section id="donate" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 uppercase tracking-wide">
          Akshaya Tritiya Daan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl overflow-hidden shadow-md bg-primary group relative"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-primary-foreground font-bold text-lg">{cat.name}</h3>
                <button
                  onClick={() => onDonate(cat.name)}
                  className="bg-background text-primary px-5 py-2 rounded-lg font-semibold text-sm hover:bg-accent transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
