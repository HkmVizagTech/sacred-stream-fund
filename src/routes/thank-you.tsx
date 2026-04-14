import { createFileRoute, Link } from "@tanstack/react-router";

type ThankYouSearch = {
  paymentId?: string;
  amount?: string;
  seva?: string;
};

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>): ThankYouSearch => ({
    paymentId: search.paymentId as string | undefined,
    amount: search.amount as string | undefined,
    seva: search.seva as string | undefined,
  }),
  head: () => ({
    meta: [
      { title: "Thank You — Gupt Vrindavan Dham" },
      { name: "description", content: "Thank you for your generous donation to Gupt Vrindavan Dham." },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { paymentId, amount, seva } = Route.useSearch();

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-card rounded-3xl shadow-2xl overflow-hidden text-center border border-border">
        <div className="bg-gradient-to-r from-temple-brown to-temple-dark p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, var(--color-saffron) 0%, transparent 60%)' }} />
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto bg-saffron rounded-full flex items-center justify-center mb-5 shadow-xl shadow-saffron/30">
              <svg className="w-10 h-10 text-temple-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-cream">धन्यवाद!</h1>
            <p className="text-cream/70 mt-2 text-lg">Thank You for Your Generous Donation</p>
          </div>
        </div>
        <div className="p-8 space-y-4">
          {seva && (
            <div className="bg-parchment rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seva Type</p>
              <p className="font-bold text-temple-brown text-lg mt-1">{seva}</p>
            </div>
          )}
          {amount && (
            <div className="bg-parchment rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Amount Donated</p>
              <p className="font-bold text-saffron text-3xl mt-1">₹{parseInt(amount).toLocaleString()}</p>
            </div>
          )}
          {paymentId && (
            <div className="bg-parchment rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Payment ID</p>
              <p className="font-mono text-foreground text-sm mt-1">{paymentId}</p>
            </div>
          )}
          <p className="text-foreground/70 leading-relaxed mt-6">
            May the blessings of Lord Krishna bring prosperity, happiness, and peace to you and your family.
          </p>
          <p className="text-saffron font-bold italic text-lg">
            "अक्षय पुण्य की प्राप्ति हो!"
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-saffron text-temple-dark px-10 py-3.5 rounded-full font-bold hover:bg-saffron-light transition-colors shadow-lg shadow-saffron/20"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
