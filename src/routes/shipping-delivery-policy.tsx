import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/shipping-delivery-policy")({
  component: ShippingDeliveryPolicyPage,
});

function ShippingDeliveryPolicyPage() {
  return (
    <ContentPageLayout
      title="Shipping & Delivery Policy"
      intro="This page explains how maha prasadam or any physical devotional items, wherever offered through this website, may be processed for dispatch and delivery by Hare Krishna Movement India, an affiliate of ISKCON, in relation to ISKCON Gambheeram Visakhapatnam seva initiatives."
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "Most contributions on this website are devotional donations and do not involve shipment of a commercial product.",
            "Where maha prasadam or any physical devotional token is offered, fulfilment is subject to donation eligibility, stock availability, temple schedule, serviceable location, and practical dispatch conditions.",
          ],
        },
        {
          heading: "Address Details",
          paragraphs: [
            "Donors are responsible for submitting a complete and accurate delivery address, recipient name, mobile number, city, state, and PIN code wherever delivery support is offered.",
            "The organization will not be responsible for delays or failed deliveries arising from incomplete, incorrect, or unreachable address details.",
          ],
        },
        {
          heading: "Dispatch and Delivery Timelines",
          paragraphs: [
            "Dispatch timelines may vary depending on festival schedules, donor volume, location, logistics availability, and temple operations.",
            "Any timeline communicated by the organization is indicative in nature and may change due to religious schedules, public holidays, weather, or courier constraints.",
          ],
        },
        {
          heading: "Serviceability",
          paragraphs: [
            "Delivery may be limited to selected serviceable locations. The organization may decline or delay fulfilment where delivery is impractical, restricted, or unavailable.",
            "If a physical fulfilment cannot be completed for operational reasons, the associated donation itself will still continue to be treated according to the seva and donation terms unless otherwise approved by the organization.",
          ],
        },
        {
          heading: "Support",
          paragraphs: [
            "For delivery-related assistance, donors should contact the organization with their transaction details and registered mobile number using the Contact Us page.",
          ],
        },
      ]}
    />
  );
}
