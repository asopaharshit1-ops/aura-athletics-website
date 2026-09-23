import React, { useState } from "react";
import { X, QrCode, ShieldCheck, Download, Check, Sparkles, Clock, MapPin } from "lucide-react";

interface DayPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail?: string;
}

export const DayPassModal: React.FC<DayPassModalProps> = ({
  isOpen,
  onClose,
  defaultEmail = ""
}) => {
  const [athleteName, setAthleteName] = useState("Marcus Kane");
  const [athleteEmail, setAthleteEmail] = useState(defaultEmail || "athlete@aura.io");
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("AURA-PASS-2025-X7");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1e2023] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isGenerated ? (
          /* Intake Form */
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
                24-Hour Digital Guest Credential
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white mt-1">
                Claim Your Free Day Pass
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                Receive unrestricted 24-hour access to the Eleiko arena, engine lab, and cold plunge recovery suite.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                  Athlete Full Name
                </label>
                <input
                  type="text"
                  required
                  value={athleteName}
                  onChange={(e) => setAthleteName(e.target.value)}
                  className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#caf300]"
                  placeholder="e.g. Marcus Kane"
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
                  className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#caf300]"
                  placeholder="e.g. athlete@aura.io"
                />
              </div>

              <div className="bg-[#1a1c1f] p-3 rounded-lg border border-white/[0.05] text-[11px] text-[#94a3b8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#caf300] shrink-0" />
                <span>Zero commitment required. Valid immediately upon digital activation.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg hover:scale-[1.01] shadow-lg transition-all cursor-pointer mt-2"
              >
                Generate 24-Hour Access Pass
              </button>
            </form>
          </div>
        ) : (
          /* Generated Digital Ticket / Pass */
          <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                  Credential Activated
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mt-0.5">
                  Aura Day Pass
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[#caf300] text-xs font-['Space_Grotesk'] font-bold">
                <Clock className="w-4 h-4" />
                <span>23H 59M ACTIVE</span>
              </div>
            </div>

            {/* Digital Badge Layout */}
            <div className="bg-[#111317] rounded-xl p-5 border border-white/[0.08] flex flex-col gap-4 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#94a3b8] font-['Space_Grotesk']">
                    Authorized Guest
                  </span>
                  <p className="font-['Space_Grotesk'] text-lg font-bold text-white uppercase">
                    {athleteName}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-[#94a3b8] font-['Space_Grotesk']">
                    Pass Protocol
                  </span>
                  <p className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300] uppercase">
                    Unrestricted All-Access
                  </p>
                </div>
              </div>

              {/* QR Code Inset */}
              <div className="bg-[#1a1c1f] p-4 rounded-xl flex items-center justify-between gap-4 border border-white/[0.05]">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-[#94a3b8] font-['Space_Grotesk']">
                    Turnstile Pass Code
                  </span>
                  <span className="font-mono text-base font-bold text-[#caf300] tracking-wider">
                    AURA-PASS-2025-X7
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Hold against reader at Main Turnstile Gate
                  </span>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                  <QrCode className="w-full h-full text-[#111317]" />
                </div>
              </div>

              {/* Location details */}
              <div className="flex items-center gap-2 text-xs text-[#94a3b8] pt-1">
                <MapPin className="w-4 h-4 text-[#caf300] shrink-0" />
                <span>AURA HQ • 440 Kinetic Way, Sector 4 • Open 24/7</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyCode}
                className="flex-1 bg-[#282a2d] hover:bg-[#333538] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3 rounded-lg border border-white/[0.08] transition-colors cursor-pointer text-center"
              >
                {copied ? "Pass Code Copied!" : "Copy Pass Code"}
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3 rounded-lg hover:scale-[1.01] transition-transform cursor-pointer text-center"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
