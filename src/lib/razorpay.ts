declare global {
  interface RazorpaySuccessResponse {
    razorpay_payment_id: string;
  }

  interface RazorpayInstance {
    open: () => void;
  }

  interface RazorpayConstructor {
    new (options: Record<string, unknown>): RazorpayInstance;
  }

  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export interface DonationOptions {
  amount: number; // in INR
  name: string;
  email: string;
  phone: string;
  sevaType: string;
  orderId?: string;
  razorpayKeyId: string;
  notes?: Record<string, string>;
  onSuccess: (paymentId: string) => void;
  onFailure: (error: string) => void;
}

export async function openRazorpayCheckout(options: DonationOptions) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    options.onFailure("Failed to load Razorpay SDK");
    return;
  }

  const razorpayOptions = {
    key: options.razorpayKeyId,
    amount: options.amount * 100, // Razorpay expects paise
    currency: "INR",
    order_id: options.orderId,
    name: "ISKCON Gambheeram Visakhapatnam",
    description: `Akshaya Tritiya - ${options.sevaType}`,
    image: "",
    handler: (response: RazorpaySuccessResponse) => {
      options.onSuccess(response.razorpay_payment_id);
    },
    prefill: {
      name: options.name,
      email: options.email,
      contact: options.phone,
    },
    notes: options.notes,
    theme: {
      color: "#5C1A0B",
    },
    modal: {
      ondismiss: () => {
        options.onFailure("Payment cancelled");
      },
    },
  };

  const Razorpay = window.Razorpay;
  if (!Razorpay) {
    options.onFailure("Razorpay SDK is unavailable");
    return;
  }

  const rzp = new Razorpay(razorpayOptions);
  rzp.open();
}
