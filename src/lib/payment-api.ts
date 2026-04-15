export interface CreateDonationOrderInput {
  name: string;
  email: string;
  mobile: string;
  amount: number;
  sevaName: string;
  certificate: boolean;
  panNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  mahaprasadam: boolean;
  prasadamAddressOption: "same" | "different";
  prasadamAddress: string;
  utm?: Record<string, string>;
}

export interface CreateDonationOrderResponse {
  orderId: string;
  key: string;
  donationId: string;
}

const PAYMENT_API_BASE_URL =
  import.meta.env.VITE_PAYMENT_API_BASE_URL?.replace(/\/$/, "") ?? "";

export async function createDonationOrder(
  input: CreateDonationOrderInput,
): Promise<CreateDonationOrderResponse> {
  if (!PAYMENT_API_BASE_URL) {
    throw new Error(
      "Payment API setup is incomplete. Add VITE_PAYMENT_API_BASE_URL before going live.",
    );
  }

  const response = await fetch(`${PAYMENT_API_BASE_URL}/api/payment/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    let message = "Unable to create donation order.";

    try {
      const errorData = (await response.json()) as { message?: string };
      if (errorData.message) {
        message = errorData.message;
      }
    } catch {
      // Use the fallback message when the response is not JSON.
    }

    throw new Error(message);
  }

  return (await response.json()) as CreateDonationOrderResponse;
}
