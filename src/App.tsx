/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { DisciplinesSection } from "./components/DisciplinesSection";
import { CoachSpotlightSection } from "./components/CoachSpotlightSection";
import { MembershipSection } from "./components/MembershipSection";
import { TelemetryProofSection } from "./components/TelemetryProofSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { Footer } from "./components/Footer";
import { WorkoutsView } from "./components/WorkoutsView";
import { CoachingView } from "./components/CoachingView";
import { MembershipsView } from "./components/MembershipsView";
import { TelemetryView } from "./components/TelemetryView";
import { MemberPortalView } from "./components/MemberPortalView";
import { DayPassModal } from "./components/DayPassModal";
import { TourModal } from "./components/TourModal";
import { DisciplineDetailModal } from "./components/DisciplineDetailModal";
import { BookAssessmentModal } from "./components/BookAssessmentModal";
import { MembershipCheckoutModal } from "./components/MembershipCheckoutModal";
import { Discipline, Coach, MembershipTier } from "./data/mockData";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>("disciplines");

  // Modal States
  const [isDayPassOpen, setIsDayPassOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedCoachForAssessment, setSelectedCoachForAssessment] = useState<Coach | null>(null);
  const [checkoutTier, setCheckoutTier] = useState<MembershipTier | null>(null);
  const [checkoutBillingCycle, setCheckoutBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [prefilledEmail, setPrefilledEmail] = useState("");

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDayPassWithEmail = (email: string) => {
    setPrefilledEmail(email);
    setIsDayPassOpen(true);
  };

  const handleBookAssessment = (coach?: Coach) => {
    setSelectedCoachForAssessment(coach || null);
    setIsAssessmentOpen(true);
  };

  const handleSelectTier = (tier: MembershipTier, billingCycle: "monthly" | "annual") => {
    setCheckoutTier(tier);
    setCheckoutBillingCycle(billingCycle);
  };

  const handleCompleteMembershipActivation = (_athleteName: string) => {
    setCheckoutTier(null);
    handleNavigate("member-portal");
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e6] flex flex-col font-['Inter'] selection:bg-[#caf300] selection:text-[#171e00]">
      {/* Top Navbar */}
      <Navbar
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenDayPass={() => setIsDayPassOpen(true)}
        onOpenMemberPortal={() => handleNavigate("member-portal")}
      />

      {/* Main Screen Content */}
      <main className="flex-grow">
        {activeScreen === "disciplines" && (
          <div className="pt-20">
            {/* Hero Section matching provided screenshot 1:1 */}
            <HeroSection
              onClaimPass={() => setIsDayPassOpen(true)}
              onExploreDisciplines={() => {
                const el = document.getElementById("disciplines");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onTourFacility={() => setIsTourOpen(true)}
            />

            {/* Curated Disciplines Module */}
            <DisciplinesSection
              onSelectDiscipline={(disc) => setSelectedDiscipline(disc)}
              onNavigateToWorkouts={() => handleNavigate("workouts-exercises")}
            />

            {/* Faculty Spotlight: Elena Vance */}
            <CoachSpotlightSection
              onBookAssessment={handleBookAssessment}
            />

            {/* Tier Protocols: Memberships */}
            <MembershipSection
              onSelectTier={handleSelectTier}
            />

            {/* High-Impact Stat Counters & Telemetry Load Progression Proof */}
            <TelemetryProofSection />

            {/* Guest Pass CTA Banner */}
            <CtaBannerSection
              onClaimWithEmail={handleOpenDayPassWithEmail}
            />
          </div>
        )}

        {activeScreen === "workouts-exercises" && <WorkoutsView />}

        {activeScreen === "coaching" && (
          <CoachingView onBookAssessment={handleBookAssessment} />
        )}

        {activeScreen === "memberships" && (
          <MembershipsView onSelectTier={handleSelectTier} />
        )}

        {activeScreen === "telemetry" && <TelemetryView />}

        {activeScreen === "member-portal" && <MemberPortalView />}
      </main>

      {/* Responsive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDayPass={() => setIsDayPassOpen(true)}
        onOpenMemberPortal={() => handleNavigate("member-portal")}
      />

      {/* Interactive Modals */}
      <DayPassModal
        isOpen={isDayPassOpen}
        onClose={() => {
          setIsDayPassOpen(false);
          setPrefilledEmail("");
        }}
        defaultEmail={prefilledEmail}
      />

      <TourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onClaimPass={() => setIsDayPassOpen(true)}
      />

      <DisciplineDetailModal
        discipline={selectedDiscipline}
        onClose={() => setSelectedDiscipline(null)}
        onNavigateToWorkouts={() => handleNavigate("workouts-exercises")}
        onClaimPass={() => setIsDayPassOpen(true)}
      />

      <BookAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => {
          setIsAssessmentOpen(false);
          setSelectedCoachForAssessment(null);
        }}
        selectedCoach={selectedCoachForAssessment}
      />

      <MembershipCheckoutModal
        isOpen={checkoutTier !== null}
        tier={checkoutTier}
        billingCycle={checkoutBillingCycle}
        onClose={() => setCheckoutTier(null)}
        onCompleteActivation={handleCompleteMembershipActivation}
      />
    </div>
  );
}
