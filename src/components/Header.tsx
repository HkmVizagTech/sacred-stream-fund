import logo from "@/assets/iskcon-gambheeram-logo.jpeg";

interface HeaderProps {
  onDonate: () => void;
}

export function Header({ onDonate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-[linear-gradient(180deg,_rgba(255,251,242,0.96)_0%,_rgba(251,244,227,0.96)_100%)] shadow-md backdrop-blur-sm">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-2.5 md:px-7 md:py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <img
            src={logo}
            alt="Srila Prabhupada's ISKCON Gambheeram Visakhapatnam"
            width={420}
            height={140}
            decoding="async"
            className="h-12 w-auto max-w-[200px] object-contain sm:h-14 sm:max-w-[240px] md:h-16 md:max-w-[300px] lg:h-[4.5rem] lg:max-w-[360px]"
          />
          <div className="hidden border-l border-primary/15 pl-3 text-left md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 lg:text-sm">
              Akshaya Tritiya 2026
            </p>
            <p className="text-xs text-foreground/80 lg:text-sm">
              ISKCON Gambheeram, Visakhapatnam
            </p>
          </div>
        </div>
        <button
          onClick={onDonate}
          className="gold-shine-button shrink-0 px-5 py-2.5 text-sm font-bold md:px-7 md:py-3 md:text-base"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
