import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CtaBannerSectionProps {
  onClaimWithEmail: (email: string) => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onClaimWithEmail
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onClaimWithEmail(email);
  };

  return (
    <section className="w-full bg-[#0c0e11] pb-16 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#282a2d] p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/[0.08]">
          {/* Subtly lit volt perimeter */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#caf300]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
                [ LIMITED ACCESS WINDOW ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-white leading-tight">
                Experience Aura Today.<br />
                <span className="text-[#caf300]">Book Your Guest Pass.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl">
                Receive full 24-hour facility access, an optional 30-minute biomechanics movement screen, and unrestricted use of the recovery hydrotherapy lounge.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER ATHLETE EMAIL"
                  className="flex-grow bg-[#0c0e11] text-white text-xs sm:text-sm px-4 py-3.5 rounded-lg border border-white/[0.1] focus:outline-none focus:border-[#caf300] placeholder:text-[#94a3b8] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg hover:scale-[1.01] hover:shadow-[0_0_24px_-4px_rgba(202,243,0,0.35)] transition-all whitespace-nowrap cursor-pointer"
                >
                  Claim Pass
                </button>
              </form>

              <span className="font-['Space_Grotesk'] text-[10px] text-[#94a3b8] uppercase tracking-wider">
                No contracts • Valid for prospective members • Instant digital confirmation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
