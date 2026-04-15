import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { getDonationCampaign } from "@/lib/donations";
import { createDonationOrder } from "@/lib/payment-api";
import { openRazorpayCheckout } from "@/lib/razorpay";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  sevaType: string;
}

interface AddressFields {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

function createEmptyAddress(): AddressFields {
  return {
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
  };
}

function isValidIndianPhone(phone: string) {
  return /^[6-9]\d{9}$/.test(phone.trim());
}

function isValidPan(pan: string) {
  return PAN_REGEX.test(pan.trim().toUpperCase());
}

function isAddressComplete(address: AddressFields) {
  return Boolean(
    address.line1.trim() &&
      address.city.trim() &&
      address.state.trim() &&
      /^\d{6}$/.test(address.pincode.trim()),
  );
}

function formatAddress(address: AddressFields) {
  return [address.line1, address.line2, address.city, address.state, address.pincode]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
}

function AddressForm({
  title,
  address,
  onChange,
}: {
  title: string;
  address: AddressFields;
  onChange: (field: keyof AddressFields, value: string) => void;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-primary/10 bg-muted/35 p-4">
      <p className="text-sm font-semibold text-primary">{title}</p>
      <input
        type="text"
        placeholder="Address Line 1 *"
        value={address.line1}
        onChange={(e) => onChange("line1", e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={address.line2}
        onChange={(e) => onChange("line2", e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="City *"
          value={address.city}
          onChange={(e) => onChange("city", e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          type="text"
          placeholder="State *"
          value={address.state}
          onChange={(e) => onChange("state", e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <input
        type="text"
        inputMode="numeric"
        maxLength={6}
        placeholder="Pincode *"
        value={address.pincode}
        onChange={(e) =>
          onChange("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))
        }
        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

export function DonationModal({
  isOpen,
  onClose,
  sevaType,
}: DonationModalProps) {
  const navigate = useNavigate();
  const campaign = useMemo(() => getDonationCampaign(sevaType), [sevaType]);
  const [amount, setAmount] = useState(campaign.defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [claim80G, setClaim80G] = useState(false);
  const [pan, setPan] = useState("");
  const [taxAddress, setTaxAddress] = useState<AddressFields>(createEmptyAddress);
  const [wantsPrasadam, setWantsPrasadam] = useState(false);
  const [prasadamAddressMode, setPrasadamAddressMode] = useState<
    "same" | "different"
  >("same");
  const [prasadamAddress, setPrasadamAddress] = useState<AddressFields>(
    createEmptyAddress,
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setAmount(campaign.defaultAmount);
    setCustomAmount("");
    setName("");
    setEmail("");
    setPhone("");
    setClaim80G(false);
    setPan("");
    setTaxAddress(createEmptyAddress());
    setWantsPrasadam(false);
    setPrasadamAddressMode("same");
    setPrasadamAddress(createEmptyAddress());
    setErrorMessage("");
  }, [campaign]);

  if (!isOpen) return null;

  const finalAmount = customAmount ? parseInt(customAmount, 10) : amount;
  const eligibleFor80G = finalAmount >= 1000;
  const eligibleForPrasadam = finalAmount >= 1000;
  const shouldCollectPrasadamAddress =
    eligibleForPrasadam &&
    wantsPrasadam &&
    (!claim80G || prasadamAddressMode === "different");

  const updateTaxAddress = (field: keyof AddressFields, value: string) => {
    setTaxAddress((current) => ({ ...current, [field]: value }));
    setErrorMessage("");
  };

  const updatePrasadamAddress = (field: keyof AddressFields, value: string) => {
    setPrasadamAddress((current) => ({ ...current, [field]: value }));
    setErrorMessage("");
  };

  const handleDonate = async () => {
    if (!name.trim() || !phone.trim() || !finalAmount || finalAmount < 1) {
      setErrorMessage(
        "Please enter your name, phone number, and a valid donation amount.",
      );
      return;
    }

    if (!isValidIndianPhone(phone)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (claim80G) {
      if (!isValidPan(pan)) {
        setErrorMessage("Please enter a valid PAN in the format ABCDE1234F.");
        return;
      }

      if (!isAddressComplete(taxAddress)) {
        setErrorMessage(
          "Please complete the 80G address with line 1, city, state, and 6-digit pincode.",
        );
        return;
      }
    }

    if (shouldCollectPrasadamAddress && !isAddressComplete(prasadamAddress)) {
      setErrorMessage(
        "Please complete the prasadam delivery address with line 1, city, state, and 6-digit pincode.",
      );
      return;
    }

    try {
      const receiptAddress = claim80G ? taxAddress : createEmptyAddress();
      const resolvedPrasadamAddress =
        wantsPrasadam && claim80G && prasadamAddressMode === "same"
          ? formatAddress(taxAddress)
          : wantsPrasadam
            ? formatAddress(prasadamAddress)
            : "";

      setErrorMessage("");
      setIsProcessing(true);

      const order = await createDonationOrder({
        name: name.trim(),
        email: email.trim(),
        mobile: phone.trim(),
        amount: finalAmount,
        sevaName: campaign.name,
        certificate: claim80G,
        panNumber: claim80G ? pan.trim().toUpperCase() : "",
        address: formatAddress(receiptAddress),
        city: receiptAddress.city,
        state: receiptAddress.state,
        pincode: receiptAddress.pincode,
        mahaprasadam: wantsPrasadam,
        prasadamAddressOption:
          wantsPrasadam && claim80G ? prasadamAddressMode : "different",
        prasadamAddress: resolvedPrasadamAddress,
      });

      await openRazorpayCheckout({
        amount: finalAmount,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        sevaType: campaign.name,
        orderId: order.orderId,
        razorpayKeyId: order.key,
        notes: {
          donationId: order.donationId,
          sevaName: campaign.name,
        },
        onSuccess: (paymentId) => {
          setIsProcessing(false);
          onClose();
          navigate({
            to: "/thank-you",
            search: {
              paymentId,
              amount: String(finalAmount),
              seva: campaign.name,
            },
          });
        },
        onFailure: (error) => {
          setIsProcessing(false);
          setErrorMessage(error || "Unable to start the payment. Please try again.");
        },
      });
    } catch (error) {
      setIsProcessing(false);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to start the payment. Please try again.",
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-t-2xl bg-primary p-6">
          <h3 className="text-xl font-bold text-primary-foreground">
            {campaign.name}
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {campaign.blurb}
          </p>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Select Amount (Rs)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {campaign.presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount("");
                    setErrorMessage("");
                  }}
                  className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                    amount === preset && !customAmount
                      ? "bg-donate-btn text-donate-btn-foreground"
                      : "bg-muted text-foreground hover:bg-accent"
                  }`}
                >
                  Rs {preset.toLocaleString()}
                </button>
              ))}
            </div>

            {campaign.mealCount ? (
              <p className="mt-3 rounded-lg bg-accent/40 px-4 py-3 text-sm text-foreground/80">
                This annadana seva is priced at Rs 25 per meal. For{" "}
                {campaign.mealCount} people, the recommended amount is{" "}
                <strong>Rs {campaign.defaultAmount.toLocaleString()}</strong>.
              </p>
            ) : null}

            <input
              type="number"
              placeholder="Or enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setErrorMessage("");
              }}
              className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {eligibleFor80G ? (
            <div className="space-y-4 rounded-2xl border border-primary/10 bg-secondary/40 p-4">
              <label className="flex items-start gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={claim80G}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setClaim80G(checked);
                    if (!checked) {
                      setPan("");
                      setTaxAddress(createEmptyAddress());
                      if (prasadamAddressMode === "same") {
                        setPrasadamAddress(createEmptyAddress());
                      }
                    }
                    setErrorMessage("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
                />
                <span>
                  <strong>Claim 80G tax benefit</strong>
                  <br />
                  Available for donations of Rs 1,000 and above.
                </span>
              </label>

              {claim80G ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="PAN Number *"
                    value={pan}
                    onChange={(e) => {
                      setPan(
                        e.target.value
                          .toUpperCase()
                          .replace(/[^A-Z0-9]/g, "")
                          .slice(0, 10),
                      );
                      setErrorMessage("");
                    }}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm uppercase tracking-[0.18em] text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                  <AddressForm
                    title="80G Receipt Address"
                    address={taxAddress}
                    onChange={updateTaxAddress}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-primary/20 bg-secondary/25 px-4 py-3 text-sm text-foreground/80">
              80G receipt details will appear once the donation amount is Rs 1,000
              or above.
            </p>
          )}

          {eligibleForPrasadam ? (
            <div className="space-y-4 rounded-2xl border border-primary/10 bg-secondary/30 p-4">
              <label className="flex items-start gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={wantsPrasadam}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setWantsPrasadam(checked);
                    if (!checked) {
                      setPrasadamAddressMode("same");
                      setPrasadamAddress(createEmptyAddress());
                    }
                    setErrorMessage("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
                />
                <span>
                  <strong>I want to receive maha prasadam</strong>
                  <br />
                  Available for donations of Rs 1,000 and above.
                </span>
              </label>

              {wantsPrasadam && claim80G ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="flex items-center gap-2 rounded-xl border border-primary/10 bg-background px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="prasadam-address-mode"
                      checked={prasadamAddressMode === "same"}
                      onChange={() => {
                        setPrasadamAddressMode("same");
                        setErrorMessage("");
                      }}
                      className="h-4 w-4 border-border text-primary focus:ring-ring"
                    />
                    Same as 80G address
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-primary/10 bg-background px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="prasadam-address-mode"
                      checked={prasadamAddressMode === "different"}
                      onChange={() => {
                        setPrasadamAddressMode("different");
                        setErrorMessage("");
                      }}
                      className="h-4 w-4 border-border text-primary focus:ring-ring"
                    />
                    Different delivery address
                  </label>
                </div>
              ) : null}

              {shouldCollectPrasadamAddress ? (
                <AddressForm
                  title="Prasadam Delivery Address"
                  address={prasadamAddress}
                  onChange={updatePrasadamAddress}
                />
              ) : null}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-primary/20 bg-secondary/25 px-4 py-3 text-sm text-foreground/80">
              Maha prasadam delivery is available for donations of Rs 1,000 or above.
            </p>
          )}

          {errorMessage ? (
            <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {errorMessage}
            </p>
          ) : null}

          <button
            onClick={handleDonate}
            disabled={isProcessing || !name.trim() || !phone.trim() || !finalAmount}
            className="gold-shine-button w-full py-3 text-lg font-bold"
          >
            {isProcessing
              ? "Processing..."
              : `Donate Rs ${(finalAmount || 0).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
