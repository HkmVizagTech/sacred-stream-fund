import spiritualBooks from "@/assets/spiritual-books.jpg";

const privileges = [
  { icon: "🙏", text: "On Donation of ₹ 1100 or above, receive Maha Prasadam from Gupt Vrindavan Dham." },
  { icon: "📿", text: "Receive Narasimha Kavach Sutra at your home." },
  { icon: "📖", text: "Receive a special gift of Spiritual Books." },
  { icon: "📜", text: "Digital Certificate of Your Contribution." },
  { icon: "🪔", text: "Sankalp and Aarti will be performed in your name." },
  { icon: "🔱", text: "Get Narasimha Yagna Tilak." },
];

interface DonorPrivilegesProps {
  onDonate: () => void;
}

export function DonorPrivileges({ onDonate }: DonorPrivilegesProps) {
  return (
    <section id="privileges" className="py-20 px-4 bg-parchment relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-saffron/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lotus-pink/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-saffron">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-temple-brown mt-3 mb-8">
              Festival Donor Privileges
            </h2>
            <div className="space-y-4">
              {privileges.map((p, i) => (
                <div key={i} className="flex items-start gap-4 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <p className="text-foreground/80 leading-relaxed text-sm">{p.text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={onDonate}
              className="mt-8 bg-saffron text-temple-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-saffron-light transition-colors shadow-lg shadow-saffron/20"
            >
              Donate Now →
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-saffron/20 to-amber-warm/20 rounded-3xl" />
              <img
                src={spiritualBooks}
                alt="Spiritual Books & Prasadam"
                loading="lazy"
                width={640}
                height={512}
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
