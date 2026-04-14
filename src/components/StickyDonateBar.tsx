interface StickyDonateBarProps {
  onDonate: () => void;
}

export function StickyDonateBar({ onDonate }: StickyDonateBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-temple-dark/95 backdrop-blur-md border-t border-saffron/20 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-sacred-green animate-pulse" />
        <p className="font-semibold text-cream text-sm md:text-base">Akshaya Tritiya Seva</p>
      </div>
      <button
        onClick={onDonate}
        className="bg-saffron text-temple-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-saffron-light transition-colors shadow-lg shadow-saffron/20"
      >
        Donate Now
      </button>
    </div>
  );
}
