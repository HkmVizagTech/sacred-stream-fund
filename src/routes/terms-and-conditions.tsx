import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <ContentPageLayout
      title="Terms & Conditions"
      intro="By using this website and making a donation, you agree to the following terms governing devotional contributions, donor information, and website usage."
      sections={[
        {
          heading: "Use of Website",
          paragraphs: [
            "Users agree to provide correct information while making donations and while contacting the organization through this website.",
            "This website is intended to facilitate voluntary donations and provide information related to Akshaya Tritiya seva offerings and associated temple service initiatives.",
          ],
        },
        {
          heading: "Donations",
          paragraphs: [
            "All donations made through this platform are voluntary and are intended for spiritual, charitable, and temple-related activities.",
            "The organization retains discretion to allocate donations in line with the stated seva purpose, campaign needs, and temple administration requirements.",
          ],
        },
        {
          heading: "Donor Information",
          paragraphs: [
            "The donor is responsible for submitting accurate name, mobile number, email address, PAN, and address details wherever requested.",
            "If incorrect or incomplete information is submitted, issuance of acknowledgements, receipts, 80G-related communication, or prasadam dispatch may be delayed or declined.",
          ],
        },
        {
          heading: "Payment Confirmation",
          paragraphs: [
            "A donation is treated as successful only after payment authorization and confirmation are received from the payment gateway and the transaction is recorded by the organization.",
            "In the event of a technical delay, the donor may be asked to share payment reference details for verification before any receipt or confirmation is issued.",
          ],
        },
        {
          heading: "Maha Prasadam and Seva Fulfilment",
          paragraphs: [
            "Maha prasadam fulfilment, where offered, is subject to contribution eligibility, serviceable delivery locations, festival schedules, and practical constraints of dispatch.",
            "Certain sevas represent devotional sponsorship categories. The exact form, date, or mode of seva execution may vary according to temple schedules, rituals, and operational requirements.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "The organization may update website content, seva listings, suggested contribution amounts, or these terms from time to time without prior notice.",
          ],
        },
      ]}
    />
  );
}
