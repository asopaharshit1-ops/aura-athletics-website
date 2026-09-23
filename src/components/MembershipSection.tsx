import React, { useState } from "react";
import { CheckCircle2, XCircle, Sparkles, Shield, ArrowRight } from "lucide-react";
import { MEMBERSHIP_TIERS, MembershipTier } from "../data/mockData";

interface MembershipSectionProps {
  onSelectTier: (tier: MembershipTier, billingCycle: "monthly" | "annual") => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onSelectTier
}) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="w-full bg-[#111317] py-16 sm:py-24" id="memberships">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
            [ TIER PROTOCOLS ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-white">
            Uncompromising Access
          </h2>
          <p className="text-base text-[#94a3b8] leading-relaxed">
            Engineered without lock-in friction. Transparent memberships tailored to your training intensity and regeneration requirements.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-[#1a1c1f] rounded-xl border border-white/[0.08] mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#282a2d] text-white shadow-sm"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-[#caf300] text-[#171e00] shadow-sm"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <span>Annual Protocol</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${billingCycle === "annual" ? "bg-[#171e00] text-[#caf300]" : "bg-[#caf300] text-[#171e00]"}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Desktop Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {MEMBERSHIP_TIERS.map((tier) => {
            const price = billingCycle === "monthly" ? tier.priceMonthly : tier.priceAnnual;

            return (
              <div
                key={tier.id}
                className={`relative rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#282a2d] shadow-[0_0_36px_-6px_rgba(202,243,0,0.22)] border-2 border-[#caf300] lg:-translate-y-2 z-10"
                    : "bg-[#1e2023] hover:bg-[#282a2d] shadow-lg border border-white/[0.06]"
                }`}
              >
                {/* Featured Badge */}
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
                      / month {billingCycle === "annual" && "(billed annually)"}
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
      </div>
    </section>
  );
};
