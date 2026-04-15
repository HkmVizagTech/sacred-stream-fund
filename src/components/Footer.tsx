import { Link } from "@tanstack/react-router";

const footerLinks = [
  { to: "/contact-us", label: "Contact Us" },
  { to: "/pricing", label: "Pricing" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/cancellation-refunds-policy", label: "Cancellation/Refunds Policy" },
  { to: "/shipping-delivery-policy", label: "Shipping & Delivery Policy" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,_#3e180c_0%,_#2b1008_100%)] pt-14 pb-24 text-donate-btn-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-hero-gold/80">
              ISKCON Gambheeram
            </p>
            <h3 className="mt-3 text-3xl font-bold">
              Akshaya Tritiya Seva Campaign, Visakhapatnam
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-donate-btn-foreground/75">
              Support the ISKCON Gambheeram Visakhapatnam Akshaya Tritiya
              campaign through Mahalakshmi Homa, Annadana Seva, Gau Seva, and
              temple service offerings in a clear devotional format.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-hero-gold">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-donate-btn-foreground/75 transition-colors hover:text-donate-btn-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-hero-gold">Seva Focus</h4>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
              {[
                "Mahalakshmi Homa",
                "Annadana",
                "Gau Seva",
                "Temple Seva",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-donate-btn-foreground/15 px-3 py-2 text-donate-btn-foreground/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-donate-btn-foreground/15 pt-6 text-xs text-donate-btn-foreground/60 md:flex md:items-center md:justify-between">
          <p>© 2026 ISKCON Gambheeram Visakhapatnam. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted for a devotional giving experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
