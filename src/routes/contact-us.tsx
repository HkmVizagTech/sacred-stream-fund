import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
});

function ContactUsPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      intro="For donation support, seva-related questions, 80G details, maha prasadam coordination, or transaction assistance, please contact the ISKCON Gambheeram support team."
      sections={[
        {
          heading: "Donation Support",
          paragraphs: [
            "If you need help choosing a seva, confirming a payment, correcting donor details, or requesting support for a failed or duplicate transaction, please contact the temple support desk.",
            "Email: support@iskcongambheeram.org",
            "Phone: +91 90000 00000",
          ],
        },
        {
          heading: "Temple Office",
          paragraphs: [
            "ISKCON Gambheeram, Visakhapatnam",
            "Office Hours: 9:00 AM to 7:00 PM, all days during the Akshaya Tritiya campaign period.",
          ],
        },
        {
          heading: "Support Requests",
          paragraphs: [
            "For faster assistance, please share your full name, registered mobile number, transaction date, amount, and payment reference whenever you contact us.",
            "Queries relating to donation receipts, 80G requests, and prasadam dispatch should ideally be reported within 7 days of the transaction.",
          ],
        },
        {
          heading: "Important Note",
          paragraphs: [
            "The contact details shown on this page should be replaced with the temple's final public support phone number, email address, and service timings before launch.",
          ],
        },
      ]}
    />
  );
}
