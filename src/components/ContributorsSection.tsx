import { useState } from "react";

const recentContributors = [
  { name: "Kavin", amount: 205, time: "11 hours ago" },
  { name: "Yogesh Gupta", amount: 153, time: "11 hours ago" },
  { name: "Megha Bansal", amount: 103, time: "12 hours ago" },
  { name: "Shreyas Mishra", amount: 1653, time: "11 hours ago" },
  { name: "Abani Kumar Meher", amount: 3163, time: "8 hours ago" },
  { name: "Anaa Sodhi", amount: 1122, time: "8 hours ago" },
  { name: "Aman Chopra", amount: 1122, time: "8 hours ago" },
  { name: "Subha Swagat", amount: 204, time: "1 hour ago" },
  { name: "Argha Kamal Das", amount: 1100, time: "14 minutes ago" },
  { name: "Priyanshu", amount: 205, time: "7 hours ago" },
  { name: "Gopal Sahdev", amount: 1100, time: "7 hours ago" },
  { name: "Neha Vaishya", amount: 501, time: "6 hours ago" },
];

export function ContributorsSection() {
  const [tab, setTab] = useState<"recent" | "generous">("recent");

  const sorted = tab === "generous"
    ? [...recentContributors].sort((a, b) => b.amount - a.amount)
    : recentContributors;

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-saffron">Community</span>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-brown mt-3">
            Respected Contributors
          </h2>
        </div>
        <div className="flex justify-center gap-3 mb-10">
          {(["recent", "generous"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                tab === t
                  ? "bg-saffron text-temple-dark shadow-md shadow-saffron/20"
                  : "bg-card text-foreground border border-border hover:border-saffron/50"
              }`}
            >
              {t === "recent" ? "Recent" : "Most Generous"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((c, i) => (
            <div key={i} className="bg-card rounded-2xl p-4 flex items-center gap-4 border border-border/50 hover:border-saffron/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron to-amber-warm flex items-center justify-center text-temple-dark font-bold text-lg shrink-0 shadow-sm">
                {c.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-temple-brown font-semibold text-sm truncate">{c.name}</p>
                <p className="text-saffron font-bold text-base">₹{c.amount.toLocaleString()}</p>
                <p className="text-muted-foreground text-xs">{c.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
