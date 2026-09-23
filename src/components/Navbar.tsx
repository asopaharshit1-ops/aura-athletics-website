import React, { useState } from "react";
import { User, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  onOpenDayPass: () => void;
  onOpenMemberPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  onNavigate,
  onOpenDayPass,
  onOpenMemberPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "disciplines", label: "Disciplines" },
    { id: "workouts-exercises", label: "Workouts & Exercises" },
    { id: "coaching", label: "Coaching" },
    { id: "memberships", label: "Memberships" },
    { id: "telemetry", label: "Telemetry" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e11]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate("disciplines")}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <img
              alt="Aura Athletics Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XQUXgCZarM8LR-FGxb3-Whfau6C6rE83jKQXD0_YuFd5m99wEqLjgdC_0bx9bIvA5edhV7SVPryWMAoxSTMIvOTYzI5KfGsQSbfwXlOXzn7p9RIoMbqhk2yER396lE-OTj7SK3_oeojwih_s_HsMIp_HbJYNSwqX4m2l4KiZGPEYfujmxmdO1PbHVco3-Keu197kUL7fyPmCsTX9ZiKxU5qD3b4nQyqBZFkF8eMAblnnHtGJEGGB-SUw"
            />
            <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight uppercase text-white group-hover:text-[#caf300] transition-colors">
              Aura Athletics
            </span>
          </button>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 ml-4">
            {navLinks.map((link) => {
              const isActive = activeScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer py-1 ${
                    isActive
                      ? "text-[#caf300] font-bold border-b-2 border-[#caf300]"
                      : "text-[#c5c9ac] hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMemberPortal}
            className={`hidden md:inline-flex text-xs font-semibold uppercase tracking-[0.08em] transition-colors px-3 py-1.5 rounded cursor-pointer ${
              activeScreen === "member-portal"
                ? "text-[#caf300] font-bold"
                : "text-[#c5c9ac] hover:text-white"
            }`}
          >
            Member Portal
          </button>

          <button
            onClick={onOpenDayPass}
            className="bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.08em] px-4 py-2.5 rounded hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(202,243,0,0.4)] transition-all cursor-pointer whitespace-nowrap"
          >
            Claim Free Day Pass
          </button>

          <button
            onClick={onOpenMemberPortal}
            title="Athlete Profile & Keycard"
            className="w-9 h-9 rounded-full bg-white hover:bg-[#caf300] text-[#111317] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-[#caf300] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c0e11] border-b border-white/[0.08] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm font-semibold uppercase tracking-wider py-2 transition-colors ${
                activeScreen === link.id
                  ? "text-[#caf300] font-bold"
                  : "text-[#c5c9ac] hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenMemberPortal();
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-semibold uppercase tracking-wider text-[#c5c9ac] hover:text-white py-2"
            >
              Member Portal & Keycard
            </button>
            <button
              onClick={() => {
                onOpenDayPass();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider py-3 rounded text-center"
            >
              Claim Free Day Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
