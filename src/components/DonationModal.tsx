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
          to: "/thank-you",
          search: { paymentId, amount: String(finalAmount), seva: sevaType },
        });
      },
      onFailure: () => {
        setIsProcessing(false);
      },
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4" onClick={onClose}>
      <div
        className="bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary p-6 rounded-t-2xl">
          <h3 className="text-primary-foreground text-xl font-bold">{sevaType}</h3>
          <p className="text-primary-foreground/80 text-sm mt-1">Akshaya Tritiya Donation</p>
        </div>
        <div className="p-6 space-y-5">
          {/* Amount selection */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Select Amount (₹)</label>
            <div className="grid grid-cols-3 gap-2">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setCustomAmount(""); }}
                  className={`py-2 rounded-lg font-semibold text-sm transition-colors ${
                    amount === a && !customAmount
                      ? "bg-donate-btn text-donate-btn-foreground"
                      : "bg-muted text-foreground hover:bg-accent"
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
              className="mt-3 w-full border border-border rounded-lg px-4 py-2 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
            />
          </div>

          {/* Donor details */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-border rounded-lg px-4 py-2 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-border rounded-lg px-4 py-2 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
            />
          </div>

          <button
            onClick={handleDonate}
            disabled={isProcessing || !name || !phone || !finalAmount}
            className="w-full bg-donate-btn text-donate-btn-foreground py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : `Donate ₹${(finalAmount || 0).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
