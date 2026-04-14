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
    <section className="py-16 px-4 bg-hero-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Respected Contributors
        </h2>
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setTab("recent")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              tab === "recent" ? "bg-donate-btn text-donate-btn-foreground" : "bg-background text-foreground border border-border"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setTab("generous")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              tab === "generous" ? "bg-donate-btn text-donate-btn-foreground" : "bg-background text-foreground border border-border"
            }`}
          >
            Most Generous
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((c, i) => (
            <div key={i} className="bg-contributor-bg rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-contributor-avatar flex items-center justify-center text-primary font-bold text-lg shrink-0">
                {c.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-primary font-semibold text-sm truncate">{c.name}</p>
                <p className="text-foreground font-bold text-sm">Donated ₹ {c.amount}</p>
                <p className="text-muted-foreground text-xs">in about {c.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
