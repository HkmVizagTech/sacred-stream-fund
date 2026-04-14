import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { openRazorpayCheckout } from "@/lib/razorpay";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  sevaType: string;
}

const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXX"; // Replace with your Razorpay Key ID

const presetAmounts = [251, 501, 1100, 2100, 5100, 11000];

export function DonationModal({ isOpen, onClose, sevaType }: DonationModalProps) {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1100);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const finalAmount = customAmount ? parseInt(customAmount) : amount;

  const handleDonate = async () => {
    if (!name || !phone || !finalAmount || finalAmount < 1) return;
    setIsProcessing(true);

    await openRazorpayCheckout({
      amount: finalAmount,
      name,
      email,
      phone,
      sevaType,
      razorpayKeyId: RAZORPAY_KEY_ID,
      onSuccess: (paymentId) => {
        setIsProcessing(false);
        onClose();
        navigate({
          to: "/thank-you" as any,
          search: { paymentId, amount: String(finalAmount), seva: sevaType } as any,
        });
      },
      onFailure: () => {
        setIsProcessing(false);
      },
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-temple-dark/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-card rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-temple-brown to-temple-dark p-6 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center">
              <span className="text-saffron text-xl">🙏</span>
            </div>
            <div>
              <h3 className="text-cream text-lg font-bold">{sevaType}</h3>
              <p className="text-cream/60 text-xs">Akshaya Tritiya Donation</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="text-sm font-bold text-foreground mb-3 block">Select Amount (₹)</label>
            <div className="grid grid-cols-3 gap-2">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setCustomAmount(""); }}
                  className={`py-2.5 rounded-xl font-bold text-sm transition-all ${
                    amount === a && !customAmount
                      ? "bg-saffron text-temple-dark shadow-md shadow-saffron/20"
                      : "bg-muted text-foreground hover:bg-accent border border-border"
                  }`}
                >
                  ₹{a.toLocaleString()}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Or enter custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="mt-3 w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-saffron/50 outline-none"
            />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-saffron/50 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-saffron/50 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-saffron/50 outline-none"
            />
          </div>

          <button
            onClick={handleDonate}
            disabled={isProcessing || !name || !phone || !finalAmount}
            className="w-full bg-saffron text-temple-dark py-3.5 rounded-full font-bold text-lg hover:bg-saffron-light transition-colors disabled:opacity-50 shadow-lg shadow-saffron/20"
          >
            {isProcessing ? "Processing..." : `Donate ₹${(finalAmount || 0).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
