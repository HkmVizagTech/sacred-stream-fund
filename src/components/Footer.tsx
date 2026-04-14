export function Footer() {
  return (
    <footer className="bg-section-dark text-donate-btn-foreground pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">GUPT VRINDAVAN DHAM</h3>
        <div className="flex justify-center gap-6 mt-6 text-sm text-donate-btn-foreground/80">
          <span>Square Feet Seva</span>
          <span>Anna Daan Seva</span>
          <span>Gau Seva</span>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          {["YouTube", "Instagram", "X", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full border border-donate-btn-foreground/30 flex items-center justify-center text-donate-btn-foreground/80 hover:text-donate-btn-foreground transition-colors text-xs"
            >
              {social.charAt(0)}
            </a>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-donate-btn-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-donate-btn-foreground/60">
          <p>©2026 Gupt Vrindavan Dham. All rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-donate-btn-foreground">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-donate-btn-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
