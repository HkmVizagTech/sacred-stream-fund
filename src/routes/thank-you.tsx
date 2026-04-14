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
    <div className="min-h-screen bg-hero-bg flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-card rounded-2xl shadow-2xl overflow-hidden text-center">
        <div className="bg-primary p-8">
          <div className="w-20 h-20 mx-auto bg-hero-gold rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground">धन्यवाद!</h1>
          <p className="text-primary-foreground/80 mt-2">Thank You for Your Generous Donation</p>
        </div>
        <div className="p-8 space-y-4">
          {seva && (
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Seva Type</p>
              <p className="font-bold text-foreground text-lg">{seva}</p>
            </div>
          )}
          {amount && (
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Amount Donated</p>
              <p className="font-bold text-foreground text-2xl">₹{parseInt(amount).toLocaleString()}</p>
            </div>
          )}
          {paymentId && (
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Payment ID</p>
              <p className="font-mono text-foreground text-sm">{paymentId}</p>
            </div>
          )}
          <p className="text-foreground/80 leading-relaxed mt-6">
            May the blessings of Lord Krishna bring prosperity, happiness, and peace to you and your family. Your contribution will help in temple construction, Gau Seva, and Annadaan.
          </p>
          <p className="text-primary font-semibold italic">
            "अक्षय पुण्य की प्राप्ति हो!"
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-donate-btn text-donate-btn-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
