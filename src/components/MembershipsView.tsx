import React, { useState } from "react";
import { CheckCircle2, XCircle, Shield, Sparkles, CreditCard, ChevronDown, ChevronUp } from "lucide-react";
import { MEMBERSHIP_TIERS, MembershipTier } from "../data/mockData";

interface MembershipsViewProps {
  onSelectTier: (tier: MembershipTier, billingCycle: "monthly" | "annual") => void;
}

export const MembershipsView: React.FC<MembershipsViewProps> = ({ onSelectTier }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does 24/7 keycard access work?",
      a: "Pro Athlete and VIP Sanctuary members receive encrypted RFID keycards paired with digital NFC wallet keys. Turnstiles at all facility gates authenticate in <100ms with biometric backup."
    },
    {
      q: "Are there contracts, cancellation fees, or freeze restrictions?",
      a: "Zero contracts. Memberships are month-to-month. You can freeze your protocol for up to 60 days per calendar year directly from your Member Portal without penalty."
    },
    {
      q: "Can I bring a guest or training partner?",
      a: "VIP Sanctuary members enjoy unlimited complimentary guest passes. Pro Athlete members receive 2 complimentary passes per month. Additional day passes are available at a member-discounted rate."
    },
    {
      q: "Is the recovery cryo spa included or an add-on?",
      a: "Cold plunge immersion and far-infrared saunas are completely unrestricted and included for Pro Athlete and VIP Sanctuary members. Essential members can upgrade on a per-session basis."
    }
  ];

  const comparisonFeatures = [
    { name: "24/7/365 Unlimited Keycard Access", essential: false, pro: true, vip: true },
    { name: "Eleiko Olympic Free Weight Arena", essential: true, pro: true, vip: true },
    { name: "Engine Lab (SkiErg, Assault Bikes, Woodway)", essential: false, pro: true, vip: true },
    { name: "Uncapped Cold Plunge & Cedar Sauna", essential: false, pro: true, vip: true },
    { name: "Biometric Telemetry App & Floor Sensors", essential: false, pro: true, vip: true },
    { name: "Monthly Movement & Velocity Audit", essential: false, pro: true, vip: true },
    { name: "Assigned Locker Suite & Towel Concierge", essential: false, false: true, pro: false, vip: true },
    { name: "Daily Performance Apparel Laundry Service", essential: false, pro: false, vip: true },
    { name: "Weekly 1-on-1 Olympic Coach Session", essential: false, pro: false, vip: true },
    { name: "Hyperbaric Oxygen & NormaTec Lounge", essential: false, pro: false, vip: true }
  ];

  return (
    <div className="w-full min-h-screen bg-[#111317] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
            [ MODULE 04 ] • PHYSICAL PROTOCOLS
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            Uncompromising Athletic Access
          </h1>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Zero lock-in friction. Precision access tiers calibrated to your performance frequency and regenerative demands.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-[#1e2023] rounded-xl border border-white/[0.08] mt-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2.5 rounded-lg text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#282a2d] text-white shadow-sm"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2.5 rounded-lg text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-[#caf300] text-[#171e00] shadow-sm"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <span>Annual Protocol</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${billingCycle === "annual" ? "bg-[#171e00] text-[#caf300]" : "bg-[#caf300] text-[#171e00]"}`}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const price = billingCycle === "monthly" ? tier.priceMonthly : tier.priceAnnual;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#282a2d] shadow-[0_0_36px_-6px_rgba(202,243,0,0.22)] border-2 border-[#caf300] lg:-translate-y-2 z-10"
                    : "bg-[#1e2023] hover:bg-[#282a2d] shadow-lg border border-white/[0.06]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular System
                  </div>
                )}

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span
                      className={`font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest ${
                        tier.popular ? "text-[#caf300]" : "text-[#94a3b8]"
                      }`}
                    >
                      {tier.tierNumber}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1.5 py-2 border-y border-white/[0.06]">
                    <span
                      className={`font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight ${
                        tier.popular ? "text-[#caf300]" : "text-white"
                      }`}
                    >
                      ${price}
                    </span>
                    <span className="text-xs font-semibold text-[#94a3b8] uppercase font-['Space_Grotesk']">
                      / month {billingCycle === "annual" && "(annual)"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    {tier.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-xs ${
                          feature.included
                            ? feature.bold
                              ? "text-white font-bold"
                              : "text-[#e2e2e6]"
                            : "text-[#94a3b8]/50"
                        }`}
                      >
                        {feature.included ? (
                          <CheckCircle2 className="w-4 h-4 text-[#caf300] shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-[#94a3b8]/40 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-tight">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onSelectTier(tier, billingCycle)}
                    className={`w-full inline-flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-4 py-3.5 rounded-lg transition-all cursor-pointer ${
                      tier.popular
                        ? "bg-[#caf300] text-[#171e00] hover:bg-white hover:text-black shadow-lg"
                        : "bg-[#1a1c1f] text-white hover:bg-white hover:text-[#111317] border border-white/[0.06]"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
              Specification Audit
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white">
              Full Protocol Matrix Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.08] text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider">
                  <th className="pb-4 font-bold">Protocol Capability</th>
                  <th className="pb-4 font-bold text-center">Essential</th>
                  <th className="pb-4 font-bold text-center text-[#caf300]">Pro Athlete</th>
                  <th className="pb-4 font-bold text-center">VIP Sanctuary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 text-[#e2e2e6]">{item.name}</td>
                    <td className="py-3.5 text-center">
                      {item.essential ? (
                        <CheckCircle2 className="w-4 h-4 text-[#caf300] mx-auto" />
                      ) : (
                        <span className="text-[#94a3b8]/30">—</span>
                      )}
                    </td>
                    <td className="py-3.5 text-center bg-[#caf300]/5">
                      {item.pro ? (
                        <CheckCircle2 className="w-4 h-4 text-[#caf300] mx-auto" />
                      ) : (
                        <span className="text-[#94a3b8]/30">—</span>
                      )}
                    </td>
                    <td className="py-3.5 text-center">
                      {item.vip ? (
                        <CheckCircle2 className="w-4 h-4 text-[#caf300] mx-auto" />
                      ) : (
                        <span className="text-[#94a3b8]/30">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
              Facility Inquiries
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white">
              Frequently Clarified Protocols
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;

              return (
                <div
                  key={index}
                  className="bg-[#1a1c1f] rounded-xl border border-white/[0.05] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-['Space_Grotesk'] text-sm font-bold uppercase text-white hover:text-[#caf300] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#caf300] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#94a3b8] shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-[#94a3b8] leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
