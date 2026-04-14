import spiritualBooks from "@/assets/spiritual-books.jpg";

const privileges = [
  "On Donation of ₹ 1100 or above, you will receive Maha Prasadam from Gupt Vrindavan Dham.",
  "Receive Narasimha Kavach Sutra at your home.",
  "Receive a special gift of Spiritual Books.",
  "Digital Certificate of Your Contribution.",
  "Sankalp and Aarti will be performed in your name.",
  "Get Narasimha Yagna Tilak",
];

interface DonorPrivilegesProps {
  onDonate: () => void;
}

export function DonorPrivileges({ onDonate }: DonorPrivilegesProps) {
  return (
    <section className="py-16 px-4 bg-section-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-20 bg-primary/30" />
            <span className="text-primary text-2xl">✦</span>
            <span className="h-px w-20 bg-primary/30" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={spiritualBooks}
              alt="Spiritual Books"
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Festival Donor Privileges
            </h2>
            <ol className="space-y-4">
              {privileges.map((p, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-foreground">{i + 1}.</span> {p}
                </li>
              ))}
            </ol>
            <button
              onClick={onDonate}
              className="mt-8 bg-donate-btn text-donate-btn-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
