import React, { useState, useEffect } from "react";
import { Activity, Gauge, Wind, Thermometer, Volume2, ShieldCheck, Play, RotateCcw, Zap } from "lucide-react";

export const TelemetryView: React.FC = () => {
  const [occupancy, setOccupancy] = useState<number>(42);
  const [isSimulatingRep, setIsSimulatingRep] = useState<boolean>(false);
  const [repProgress, setRepProgress] = useState<number>(100);
  const [currentVelocity, setCurrentVelocity] = useState<number>(1.18);
  const [peakPowerWatts, setPeakPowerWatts] = useState<number>(1420);

  // Subtle live pulse fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancy((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.min(52, Math.max(38, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateRep = () => {
    if (isSimulatingRep) return;
    setIsSimulatingRep(true);
    setRepProgress(0);

    const startTime = Date.now();
    const duration = 2000; // 2 seconds lift

    const animInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / duration) * 100);
      setRepProgress(progress);

      // Simulating realistic barbell velocity curve
      if (progress < 25) {
        // First pull off platform
        setCurrentVelocity(parseFloat((0.45 + (progress / 25) * 0.4).toFixed(2)));
        setPeakPowerWatts(Math.floor(750 + progress * 20));
      } else if (progress < 60) {
        // Violent second pull / hip extension explosion
        const subP = (progress - 25) / 35;
        setCurrentVelocity(parseFloat((0.85 + Math.sin(subP * Math.PI) * 0.55).toFixed(2)));
        setPeakPowerWatts(Math.floor(1250 + Math.sin(subP * Math.PI) * 450));
      } else if (progress < 85) {
        // Turnover & catch
        setCurrentVelocity(parseFloat((0.95 - ((progress - 60) / 25) * 0.5).toFixed(2)));
        setPeakPowerWatts(Math.floor(800));
      } else {
        // Recovery & lockout
        setCurrentVelocity(1.18);
        setPeakPowerWatts(1420);
      }

      if (progress >= 100) {
        clearInterval(animInterval);
        setIsSimulatingRep(false);
      }
    }, 40);
  };

  return (
    <div className="w-full min-h-screen bg-[#111317] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
              <span>[ MODULE 05 ]</span>
              <span>•</span>
              <span>INTEGRATED LAB SENSORS & TELEMETRY</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Live Biometric Telemetry
            </h1>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Sub-millisecond optical floor sensors, linear barbell transducers, and facility airflow environmental feedback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e2023] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#caf300] animate-ping" />
              <span className="font-['Space_Grotesk'] text-[11px] font-bold text-white uppercase tracking-wider">
                Telemetry Frequency: 100Hz
              </span>
            </div>
          </div>
        </div>

        {/* 4 High-Frequency Environmental Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#1e2023] p-6 rounded-2xl border border-white/[0.08] shadow-lg flex flex-col gap-2">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest">
                Gym Occupancy
              </span>
              <Activity className="w-4 h-4 text-[#caf300]" />
            </div>
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tabular-nums">
              {occupancy}%
            </div>
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#caf300]">
              Optimal Training Flow
            </span>
          </div>

          <div className="bg-[#1e2023] p-6 rounded-2xl border border-white/[0.08] shadow-lg flex flex-col gap-2">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest">
                Air Purification
              </span>
              <Wind className="w-4 h-4 text-[#caf300]" />
            </div>
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
              99.8%
            </div>
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
              HEPA-14 Active Exchange
            </span>
          </div>

          <div className="bg-[#1e2023] p-6 rounded-2xl border border-white/[0.08] shadow-lg flex flex-col gap-2">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest">
                Arena Temperature
              </span>
              <Thermometer className="w-4 h-4 text-[#caf300]" />
            </div>
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
              19.5°C
            </div>
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
              67.1°F • 44% RH (Calibrated)
            </span>
          </div>

          <div className="bg-[#1e2023] p-6 rounded-2xl border border-white/[0.08] shadow-lg flex flex-col gap-2">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest">
                CO2 Density
              </span>
              <Gauge className="w-4 h-4 text-[#caf300]" />
            </div>
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#caf300]">
              412 <span className="text-lg text-white font-normal">PPM</span>
            </div>
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
              Outdoor Baseline Parity
            </span>
          </div>
        </div>

        {/* Centerpiece: Real-Time Linear Transducer Velocity Profiler */}
        <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                Linear Transducer Telemetry • Active Sector: Barbell Pit 01
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                Barbell Velocity & Acceleration Waveform
              </h3>
            </div>

            <button
              onClick={handleSimulateRep}
              disabled={isSimulatingRep}
              className={`inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all cursor-pointer ${
                isSimulatingRep
                  ? "bg-[#282a2d] text-[#caf300] border border-[#caf300]/40"
                  : "bg-[#caf300] text-[#171e00] hover:scale-105 shadow-md"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>{isSimulatingRep ? "Sampling Bar Path..." : "Simulate Snatch Pull (140KG)"}</span>
            </button>
          </div>

          {/* Readout Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05]">
              <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
                Instantaneous Velocity
              </span>
              <div className="font-['Space_Grotesk'] text-3xl font-bold text-[#caf300] mt-1 tabular-nums">
                {currentVelocity} <span className="text-sm font-normal text-white">m/s</span>
              </div>
            </div>
            <div className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05]">
              <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
                Peak Kinetic Power
              </span>
              <div className="font-['Space_Grotesk'] text-3xl font-bold text-white mt-1 tabular-nums">
                {peakPowerWatts} <span className="text-sm font-normal text-[#94a3b8]">Watts</span>
              </div>
            </div>
            <div className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05]">
              <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
                Vertical Bar Path Deviation
              </span>
              <div className="font-['Space_Grotesk'] text-3xl font-bold text-white mt-1">
                ±1.4 <span className="text-sm font-normal text-[#94a3b8]">cm (Optimal)</span>
              </div>
            </div>
          </div>

          {/* Interactive Waveform Canvas / SVG */}
          <div className="relative w-full h-56 bg-[#1a1c1f] rounded-xl p-4 border border-white/[0.05] overflow-hidden flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#caf300" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#caf300" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Waveform curve */}
              <path
                d="M 0,180 Q 150,170 250,110 T 420,30 T 560,90 T 700,160 T 800,165"
                fill="none"
                stroke="#caf300"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              <path
                d="M 0,180 Q 150,170 250,110 T 420,30 T 560,90 T 700,160 T 800,165 L 800,200 L 0,200 Z"
                fill="url(#waveFill)"
              />

              {/* Progress Tracker Cursor */}
              <line
                x1={(repProgress / 100) * 800}
                y1="0"
                x2={(repProgress / 100) * 800}
                y2="200"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <circle
                cx={(repProgress / 100) * 800}
                cy={100}
                r="5"
                fill="#caf300"
                stroke="#111317"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#94a3b8] font-['Space_Grotesk']">
            <span>First Pull Break (0.0s)</span>
            <span>Hip Contact Extension (0.8s)</span>
            <span>Turnover & Catch (1.4s)</span>
            <span>Stand & Stabilize (2.0s)</span>
          </div>
        </div>

        {/* Heart Rate Zones Distribution */}
        <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
              Facility Heart Rate Distribution
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
              Live Arena Cardiovascular Zones
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { zone: "Zone 01", label: "Recovery", range: "< 60% HR Max", color: "bg-blue-500", athletes: 6 },
              { zone: "Zone 02", label: "Aerobic Base", range: "60-70% HR Max", color: "bg-teal-500", athletes: 14 },
              { zone: "Zone 03", label: "Tempo", range: "70-80% HR Max", color: "bg-emerald-400", athletes: 9 },
              { zone: "Zone 04", label: "Threshold", range: "80-90% HR Max", color: "bg-[#caf300]", athletes: 12 },
              { zone: "Zone 05", label: "VO2 Max Surge", range: "90-100% HR Max", color: "bg-red-500", athletes: 4 }
            ].map((z, idx) => (
              <div key={idx} className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05] flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-white">{z.zone}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${z.color}`} />
                </div>
                <div className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase">{z.label}</div>
                <div className="text-[11px] text-[#94a3b8]">{z.range}</div>
                <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#caf300] pt-2 border-t border-white/[0.05]">
                  {z.athletes} Athletes Syncing
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
