interface HeaderProps {
  onDonate: () => void;
}

export function Header({ onDonate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-temple-dark/90 backdrop-blur-md border-b border-saffron/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center">
            <span className="text-temple-dark font-bold text-lg">ॐ</span>
          </div>
          <div className="text-cream text-sm font-semibold tracking-wider uppercase leading-tight">
            Gupt Vrindavan<br />Dham
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-cream/80 text-sm font-medium">
          <a href="#about" className="hover:text-saffron transition-colors">About</a>
          <a href="#seva" className="hover:text-saffron transition-colors">Seva Options</a>
          <a href="#privileges" className="hover:text-saffron transition-colors">Privileges</a>
        </nav>
        <button
          onClick={onDonate}
          className="bg-saffron text-temple-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-saffron-light transition-colors shadow-lg shadow-saffron/20"
        >
          Donate Now
        </button>
      </div>
    </header>
  );
}
