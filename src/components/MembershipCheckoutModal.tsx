import React, { useState } from "react";
import { X, CheckCircle2, Shield, Key, Sparkles, ArrowRight } from "lucide-react";
import { MembershipTier } from "../data/mockData";

interface MembershipCheckoutModalProps {
  isOpen: boolean;
  tier: MembershipTier | null;
  billingCycle: "monthly" | "annual";
  onClose: () => void;
  onCompleteActivation: (athleteName: string) => void;
}

export const MembershipCheckoutModal: React.FC<MembershipCheckoutModalProps> = ({
  isOpen,
  tier,
  billingCycle,
  onClose,
  onCompleteActivation
}) => {
  const [athleteName, setAthleteName] = useState("Marcus Kane");
  const [athleteEmail, setAthleteEmail] = useState("marcus@aura.io");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !tier) return null;

  const price = billingCycle === "monthly" ? tier.priceMonthly : tier.priceAnnual;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onCompleteActivation(athleteName);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1e2023] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                Access Protocol Enrollment
              </span>
              <span className="text-[10px] text-[#94a3b8] font-['Space_Grotesk'] uppercase">
                • {billingCycle === "annual" ? "Annual Protocol (-20%)" : "Monthly Recurring"}
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white mt-1">
              Initialize {tier.name} Access
            </h3>
            <p className="text-xs text-[#94a3b8] mt-1">
              Configure your encrypted RFID/NFC keycard credentials.
            </p>
          </div>

          {/* Pricing Summary */}
          <div className="bg-[#111317] p-4 rounded-xl border border-white/[0.08] flex items-center justify-between">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300] uppercase block">
                {tier.tierNumber} Protocol
              </span>
              <span className="text-xs text-[#94a3b8]">Billed {billingCycle}</span>
            </div>
            <div className="text-right">
              <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                ${price}
              </span>
              <span className="text-[10px] text-[#94a3b8] block uppercase">/ month</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                Athlete Name (Printed on NFC Keycard)
              </label>
              <input
                type="text"
                required
                value={athleteName}
                onChange={(e) => setAthleteName(e.target.value)}
                className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#caf300] font-['Space_Grotesk'] font-bold uppercase"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                Athlete Email Address
              </label>
              <input
                type="email"
                required
                value={athleteEmail}
                onChange={(e) => setAthleteEmail(e.target.value)}
                className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#caf300]"
              />
            </div>

            <div className="bg-[#1a1c1f] p-3 rounded-lg border border-white/[0.05] text-[11px] text-[#94a3b8] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#caf300] shrink-0" />
              <span>Zero cancellation penalties. Access activated immediately upon issuance.</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg hover:scale-[1.01] shadow-lg transition-all cursor-pointer mt-2 flex items-center justify-center gap-2"
            >
              <span>{isProcessing ? "Encrypting NFC Keycard..." : "Issue Keycard & Open Member Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
