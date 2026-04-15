import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <ContentPageLayout
      title="Pricing"
      intro="Seva contributions on this website are voluntary donations offered by devotees and well-wishers to support temple activities, festival service initiatives, annadana, gau seva, homa, and other devotional offerings."
      sections={[
        {
          heading: "Donation Amounts",
          paragraphs: [
            "The website may display suggested contribution amounts for specific sevas such as Gau Seva, Annadana Seva, Mahalakshmi Homa, and Mandir Nirman Seva.",
            "These suggested amounts are indicative only. Devotees may choose any contribution amount unless a seva is specifically presented as a sponsorship level or fixed seva contribution.",
          ],
        },
        {
          heading: "Feed a Number of People",
          paragraphs: [
            "Campaign cards such as Feed 100 People, Feed 200 People, Feed 400 People, Feed 500 People, and Feed 1000 People are devotional sponsorship options intended to help donors identify the scale of annadana they wish to support.",
            "For annadana calculations on this website, one meal is currently considered at Rs 25 per person.",
          ],
        },
        {
          heading: "Taxes, Fees, and Charges",
          paragraphs: [
            "Amounts shown on the donation page represent the intended contribution amount. No separate platform fee is charged by this website unless clearly stated at checkout.",
            "Banks, card issuers, UPI apps, or payment service providers may independently apply rules or charges at their end according to the donor's payment method.",
          ],
        },
        {
          heading: "Receipts and 80G",
          paragraphs: [
            "Donation receipts are issued against the amount successfully received through the payment gateway.",
            "Where applicable, 80G-related information may be processed only when the donor submits accurate details such as PAN and address.",
          ],
        },
      ]}
    />
  );
}
