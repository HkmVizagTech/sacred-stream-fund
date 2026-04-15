import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      intro="This Privacy Policy explains how donor and visitor information may be collected, used, stored, and protected when interacting with this website operated for Hare Krishna Movement India, an affiliate of ISKCON, in support of ISKCON Gambheeram Visakhapatnam seva activities."
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We may collect your name, email address, phone number, donation amount, PAN details, postal address, and any details submitted through donation or contact forms.",
            "Payment processing may be handled by third-party providers. Sensitive payment credentials such as full card numbers, CVV, or UPI PIN are not stored directly by this website unless clearly stated.",
          ],
        },
        {
          heading: "How Information Is Used",
          paragraphs: [
            "Your information may be used to process donations, issue acknowledgements, generate receipts, respond to enquiries, coordinate maha prasadam fulfilment, and improve donor communication.",
            "We may also use contact details to share updates about seva activities, campaigns, temple initiatives, and donation-related follow-up wherever permitted.",
          ],
        },
        {
          heading: "Sharing of Information",
          paragraphs: [
            "Information may be shared with payment gateway partners, internal service providers, technology vendors, messaging partners, or statutory authorities only to the extent reasonably required for donation processing, communication, compliance, and support.",
            "Hare Krishna Movement India, an affiliate of ISKCON, does not sell donor personal information as part of a commercial data business.",
          ],
        },
        {
          heading: "Data Security and Retention",
          paragraphs: [
            "Reasonable administrative and technical measures are used to protect donor information against unauthorized access, misuse, or disclosure.",
            "Donation and donor records may be retained for accounting, compliance, audit, communication, receipt generation, or dispute-resolution purposes.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For privacy-related requests, corrections, or support, donors may contact the organization using the details published on the Contact Us page.",
          ],
        },
      ]}
    />
  );
}
