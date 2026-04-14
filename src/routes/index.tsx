import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteSection } from "@/components/QuoteSection";
import { VideoSection } from "@/components/VideoSection";
import { DonationCards } from "@/components/DonationCards";
import { DonorPrivileges } from "@/components/DonorPrivileges";
import { SignificanceSection } from "@/components/SignificanceSection";
import { ContributorsSection } from "@/components/ContributorsSection";
import { TempleSection } from "@/components/TempleSection";
import { Footer } from "@/components/Footer";
import { StickyDonateBar } from "@/components/StickyDonateBar";
import { DonationModal } from "@/components/DonationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshaya Tritiya 2026 Donation – Offer Seva and Daan | Gupt Vrindavan Dham" },
      { name: "description", content: "Donate on Akshaya Tritiya 2026 for Gau Seva, Annadaan Seva & Mandir Nirman at Gupt Vrindavan Dham. Earn imperishable Akshaya Punya." },
      { property: "og:title", content: "Akshaya Tritiya 2026 Donation – Gupt Vrindavan Dham" },
      { property: "og:description", content: "Donate for Gau Seva, Annadaan & Temple Construction. Earn Akshaya Punya." },
    ],
  }),
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeva, setSelectedSeva] = useState("Akshaya Tritiya Seva");

  const openDonation = (seva?: string) => {
    setSelectedSeva(seva || "Akshaya Tritiya Seva");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onDonate={() => openDonation()} />
      <HeroSection />
      <QuoteSection />
      <VideoSection />
      <DonationCards onDonate={(seva) => openDonation(seva)} />
      <DonorPrivileges onDonate={() => openDonation()} />
      <SignificanceSection />
      <ContributorsSection />
      <TempleSection onDonate={() => openDonation("Mandir Nirman Seva")} />
      <Footer />
      <StickyDonateBar onDonate={() => openDonation()} />
      <DonationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sevaType={selectedSeva}
      />
    </div>
  );
}
