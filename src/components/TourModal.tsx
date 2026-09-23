import React, { useState } from "react";
import { X, Volume2, VolumeX, Eye, ArrowRight, Activity, Thermometer, ShieldCheck } from "lucide-react";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimPass: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({
  isOpen,
  onClose,
  onClaimPass
}) => {
  const [activeSector, setActiveSector] = useState<number>(0);
  const [ambientSound, setAmbientSound] = useState<boolean>(false);

  if (!isOpen) return null;

  const sectors = [
    {
      id: "pit",
      title: "Sector 01: Barbell Pit & Competition Platforms",
      tag: "OLYMPIC HEAVY STRENGTH",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-dRUF0totNhKKVXru3fSUwKGW4b7JyY8U3mylJt2gJAwpTwWMZF41ZEsD3QAcAVY3-_1YYR8IcQ2_a7eMDna3l4J-osToTa4v9h-Tcie6ySp-5-4w4wneQ6u1FjQ3UqyDPqYbJGGNz9dGPUVzmcbsrYdSk8q1Z-BlwiPsvZniWnhDvJpxFyKze4VpuwTTNiI8dzm4tzmeaKYSuf5Ey0PqlHKovgMjEb7gptb6_IrlandwTx4CvKc",
      description: "12 sunken oak weightlifting platforms anchored into vibration-damped concrete subfloors. 100% outfitted with Eleiko IPF & IWF certified competition barbells and calibrated steel plates.",
      specs: [
        { label: "Platforms", value: "12 Custom Flush Oak" },
        { label: "Barbells", value: "Eleiko IWF / IPF" },
        { label: "Encoders", value: "Linear Transducers Sync" }
      ]
    },
    {
      id: "engine",
      title: "Sector 02: HIIT & Cardiovascular Engine Lab",
      tag: "VO2 MAX CONDITIONING",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VV1STX0vYyjidmcNWKcH6dONez2H-c3M28HRtdKU2ZrsITWgFgaBWQuNW6hMkZCc6Mmshh1_TvPmZxGkKXhnlB1mDm-_EXT5COehVD0M3bC-2BTLTfH12vyUK67dlHfyOCROQF_WYDhPEVJPOvWbnecKC1-syNZMentOlUvM_1Qq4gWrks4jvcQzFhgppPcfJO8RcJsGXlKt5ucQKbZmy3TSkb4ktpa4ciZqXNcTN3wJ5WgzcgQ_OjRA",
      description: "Dedicated aerobic power arena featuring Concept2 SkiErgs, BikeErgs, Rowers, Woodway Curve non-motorized treadmills, and live lactate threshold monitors.",
      specs: [
        { label: "Ergometers", value: "24 Concept2 Units" },
        { label: "Airflow", value: "12 Air Exchanges/Hr" },
        { label: "Zone Sync", value: "ANT+ / BLE Live" }
      ]
    },
    {
      id: "cryo",
      title: "Sector 03: Contrast Cryo & Infrared Spa",
      tag: "NEUROMUSCULAR REGENERATION",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-dRUF0totNhKKVXru3fSUwKGW4b7JyY8U3mylJt2gJAwpTwWMZF41ZEsD3QAcAVY3-_1YYR8IcQ2_a7eMDna3l4J-osToTa4v9h-Tcie6ySp-5-4w4wneQ6u1FjQ3UqyDPqYbJGGNz9dGPUVzmcbsrYdSk8q1Z-BlwiPsvZniWnhDvJpxFyKze4VpuwTTNiI8dzm4tzmeaKYSuf5Ey0PqlHKovgMjEb7gptb6_IrlandwTx4CvKc",
      description: "Medical-grade 3°C cold plunge tanks with twin micro-filtration, accompanied by Canadian western red cedar infrared saunas reaching 85°C for rapid contrast therapy.",
      specs: [
        { label: "Plunge Temp", value: "3°C / 37.4°F" },
        { label: "Sauna Temp", value: "85°C / 185°F" },
        { label: "Recovery", value: "NormaTec 3 Boots" }
      ]
    },
    {
      id: "turf",
      title: "Sector 04: 40m Sprint Turf Arena",
      tag: "KINETIC ACCELERATION",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVDJ2Oqn4E9hvcLxCMeOI24-Cph_B4HxUeeNkzkjEYNXWP9dyuvX2ZbUf2VOs89j-jOAAKPK06ndxinXXDulv8rswrfdmJhPqQ7b_rKEDUTQ8CI88gMc1FqW592Xr8dD7T5ydUcHix6vLALOV3iV1X09jY4hm5d5lRFBxqJcfgLSbEGCYwyC7urNbpBpWAXyr4Hp3mEXG-o26qcJYPIhwx1co86bOS3-qJZ-uhs4Uoo1yyirg5_iD5",
      description: "Dual-lane indoor synthetic sprint turf with embedded timing gates, magnetic resistance Torque Tank sleds, and high-impact plyometric jump towers.",
      specs: [
        { label: "Length", value: "40 Meters Track" },
        { label: "Sleds", value: "Torque Tank M4" },
        { label: "Timing", value: "Laser Gate Arrays" }
      ]
    }
  ];

  const current = sectors[activeSector];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1e2023] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#caf300] animate-pulse" />
            <div>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                Virtual Telemetry Walkthrough
              </span>
              <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold uppercase text-white">
                15,000 SQFT Performance Laboratory
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAmbientSound(!ambientSound)}
              className="p-2 rounded-lg bg-[#282a2d] hover:bg-[#333538] text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
              title={ambientSound ? "Mute Facility Audio" : "Play Facility Acoustics"}
            >
              {ambientSound ? <Volume2 className="w-4 h-4 text-[#caf300]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 flex flex-col gap-6">
          {/* Main Visual Display */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0c0e11] border border-white/[0.08] group">
            <img
              alt={current.title}
              src={current.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e11] via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 left-4 bg-[#0c0e11]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08]">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                {current.tag}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h4 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white">
                  {current.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Sector Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {sectors.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setActiveSector(idx)}
                className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                  activeSector === idx
                    ? "bg-[#282a2d] border-[#caf300] shadow-sm"
                    : "bg-[#1a1c1f] border-white/[0.05] hover:border-white/[0.15]"
                }`}
              >
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-[#caf300] block">
                  0{idx + 1}
                </span>
                <span className="text-xs font-['Space_Grotesk'] font-bold text-white uppercase line-clamp-1">
                  {sec.title.split(":")[1]?.trim() || sec.title}
                </span>
              </button>
            ))}
          </div>

          {/* Detailed Sector Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-8 flex flex-col gap-2">
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2">
              {current.specs.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-xs bg-[#1a1c1f] px-3 py-2 rounded-lg border border-white/[0.04]">
                  <span className="text-[#94a3b8]">{s.label}</span>
                  <span className="font-['Space_Grotesk'] font-bold text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-white/[0.08] flex items-center justify-between bg-[#1a1c1f]/60">
          <span className="text-xs text-[#94a3b8]">
            Experience this sector in person with a 24-hr trial pass.
          </span>
          <button
            onClick={() => {
              onClose();
              onClaimPass();
            }}
            className="bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer"
          >
            Claim Free Day Pass
          </button>
        </div>
      </div>
    </div>
  );
};
