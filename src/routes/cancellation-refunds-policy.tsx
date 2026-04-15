import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/cancellation-refunds-policy")({
  component: CancellationRefundsPolicyPage,
});

function CancellationRefundsPolicyPage() {
  return (
    <ContentPageLayout
      title="Cancellation/Refunds Policy"
      intro="Because donations made through this website are devotional and charitable contributions, cancellations and refunds are handled carefully and only in limited circumstances."
      sections={[
        {
          heading: "General Policy",
          paragraphs: [
            "Donations once processed are generally treated as final and non-refundable.",
            "If a donation is reported as duplicated, incorrect due to a technical issue, or charged in error, the donor may contact Hare Krishna Movement India, an affiliate of ISKCON, for review.",
          ],
        },
        {
          heading: "Refund Review",
          paragraphs: [
            "Refund requests should be submitted promptly with transaction details, donor name, amount, and date of contribution.",
            "Approved refunds, if any, will be processed through the original payment method subject to payment provider timelines.",
          ],
        },
        {
          heading: "Typical Cases Considered",
          paragraphs: [
            "The organization may review cases such as duplicate payment, multiple debits for the same intended donation, payment marked successful by the bank but not reflected correctly in the donation system, or other clear technical errors.",
            "Refund requests may be declined where the donation has been correctly processed and no payment-system error is established.",
          ],
        },
        {
          heading: "Review Timeline",
          paragraphs: [
            "Donors should ideally report refund-related issues within 7 days of the transaction using the support details listed on the Contact Us page.",
            "Resolution timelines may vary depending on payment gateway confirmation, bank processing timelines, and internal verification requirements.",
          ],
        },
      ]}
    />
  );
}
