export function Footer() {
  return (
    <footer className="bg-temple-dark pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-saffron flex items-center justify-center">
              <span className="text-temple-dark font-bold text-xl">ॐ</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-cream">Gupt Vrindavan Dham</h3>
          <p className="text-cream/50 text-sm mt-2">Rajasthan's Largest Temple Project</p>
        </div>
        <div className="flex justify-center gap-8 mt-10 text-sm text-cream/60">
          <span className="hover:text-saffron transition-colors cursor-pointer">Square Feet Seva</span>
          <span className="hover:text-saffron transition-colors cursor-pointer">Anna Daan Seva</span>
          <span className="hover:text-saffron transition-colors cursor-pointer">Gau Seva</span>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {[
            { label: "YT", icon: "▶" },
            { label: "IG", icon: "📷" },
            { label: "X", icon: "𝕏" },
            { label: "FB", icon: "f" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-11 h-11 rounded-full bg-cream/10 hover:bg-saffron/20 flex items-center justify-center text-cream/70 hover:text-saffron transition-all text-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>©2026 Gupt Vrindavan Dham. All rights Reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
