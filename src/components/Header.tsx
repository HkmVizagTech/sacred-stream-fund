interface HeaderProps {
  onDonate: () => void;
}

export function Header({ onDonate }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 py-4">
      <div className="text-primary text-xs font-bold uppercase leading-tight">
        GUPT<br />VRINDAVAN<br />DHAM
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onDonate}
          className="bg-hero-gold text-primary px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
