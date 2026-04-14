interface StickyDonateBarProps {
  onDonate: () => void;
}

export function StickyDonateBar({ onDonate }: StickyDonateBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-sticky-bg text-donate-btn-foreground px-4 py-3 flex items-center justify-between">
      <p className="font-semibold text-sm md:text-base">Akshaya Tritiya Seva</p>
      <button
        onClick={onDonate}
        className="bg-hero-gold text-primary px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Donate Now
      </button>
    </div>
  );
}
