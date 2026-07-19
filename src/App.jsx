import ProjectGrid from "./components/ProjectGrid";
import React, { useEffect, useRef, useState } from "react";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

export default function App() {
  const gradientRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Scroll monitoring event to hide indicator cleanly
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Animate words fluidly with correct CSS rules
    const words = document.querySelectorAll(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards";
      }, delay);
    });

    // 3. Interactive mouse tracker glow canvas
    const gradient = gradientRef.current;
    function onMouseMove(e) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // 4. Premium text hover micro-interactions
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.6)";
        word.style.color = "#ffffff";
        word.style.transform = "scale(1.05)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
        word.style.color = "";
        word.style.transform = "scale(1)";
      });
    });

    // 5. Click radial wave ripple element logic
    function onClick(e) {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7] overflow-x-hidden relative w-full flex flex-col">
      {/* Dynamic Global CSS Animation Engine */}
      <style>{`
        .word { opacity: 0; display: inline-block; margin-right: 0.25em; transition: all 0.3s ease; transform: translateY(15px); }
        @keyframes word-appear { to { opacity: 1; transform: translateY(0); } }
        
        .grid-line { stroke: rgba(200,180,160,0.12); stroke-width: 0.75; opacity: 0; animation: line-pulse 3s ease-in-out infinite alternate; }
        @keyframes line-pulse { from { opacity: 0.05; } to { opacity: 0.18; } }
        
        .detail-dot { fill: ${colors[200]}; opacity: 0; animation: dot-glow 4s infinite ease-in-out; }
        @keyframes dot-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.5); } }

        .corner-element { position: absolute; width: 12px; height: 12px; border: 1px solid rgba(200,180,160,0.2); opacity: 0; animation: fade-in 1.5s forwards; }
        @keyframes fade-in { to { opacity: 1; } }

        .floating-element { position: absolute; width: 6px; height: 6px; background: rgba(200,180,160,0.15); border-radius: 50%; filter: blur(1px); animation: float-bubble 8s infinite linear; }
        @keyframes float-bubble { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 0.4; } 90% { opacity: 0.4; } 100% { transform: translateY(-60px) translateX(15px); opacity: 0; } }

        .click-ripple { position: fixed; width: 4px; height: 4px; background: rgba(200, 180, 160, 0.4); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards; }
        @keyframes pulse-glow { to { width: 150px; height: 150px; opacity: 0; border: 1px solid rgba(200,180,160,0); } }

        /* Structural Blueprint for Scroll Arrow System */
        .scroll-hint {
          position: absolute;
          bottom: 5.5rem; /* Elevated vertically to sit cleanly above system toolbars */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem; /* Enhanced spatial padding */
          pointer-events: none;
          z-index: 40;
          opacity: 0;
          animation: fade-in 1s forwards;
          animation-delay: 4s; /* Matches typography completion perfectly */
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease;
        }
        .scroll-hint.hidden-node {
          opacity: 0 !important;
          transform: translate(-50%, 15px);
        }
        @keyframes custom-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(8px) scale(1.05); } /* Balanced motion path metrics */
        }
        .bounce-arrow {
          animation: custom-bounce 2s infinite ease-in-out;
        }
      `}</style>

      {/* SVG Background Layer */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(200,180,160,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <circle cx="20%" cy="20%" r="3" className="detail-dot" style={{ animationDelay: "0s", transformOrigin: "20% 20%" }} />
        <circle cx="80%" cy="20%" r="3" className="detail-dot" style={{ animationDelay: "1s", transformOrigin: "80% 20%" }} />
        <circle cx="20%" cy="80%" r="3" className="detail-dot" style={{ animationDelay: "2s", transformOrigin: "20% 80%" }} />
        <circle cx="80%" cy="80%" r="3" className="detail-dot" style={{ animationDelay: "3s", transformOrigin: "80% 80%" }} />
      </svg>

      {/* Ambient Grid Structures */}
      <div className="corner-element top-8 left-8 border-t border-l" style={{ animationDelay: "0.2s" }} />
      <div className="corner-element top-8 right-8 border-t border-r" style={{ animationDelay: "0.4s" }} />
      <div className="corner-element bottom-8 left-8 border-b border-l" style={{ animationDelay: "0.6s" }} />
      <div className="corner-element bottom-8 right-8 border-b border-r" style={{ animationDelay: "0.8s" }} />

      {/* Cosmic Floating Background Particles */}
      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "0s" }} />
      <div className="floating-element" style={{ top: "60%", left: "82%", animationDelay: "2s" }} />
      <div className="floating-element" style={{ top: "40%", left: "8%", animationDelay: "4s" }} />
      <div className="floating-element" style={{ top: "75%", left: "91%", animationDelay: "1s" }} />

      {/* Mouse Interaction Aura */}
      <div ref={gradientRef} style={{ position: "fixed", width: "384px", height: "384px", background: "radial-gradient(circle, rgba(200,180,160,0.08) 0%, transparent 75%)", pointerEvents: "none", opacity: 0, transition: "opacity 0.5s ease", zIndex: 1 }} />

      {/* Main Responsive Content Flow */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Hero Area */}
        <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center select-none relative">
          <h2 className="text-xs md:text-sm font-mono font-light uppercase tracking-[0.25em] opacity-70" style={{ color: colors[200] }}>
            <span className="word" data-delay="100">Welcome</span>
            <span className="word" data-delay="250">To</span>
            <span className="word" data-delay="400">My</span>
            <span className="word" data-delay="550">Cloud</span>
            <span className="word" data-delay="700">Portfolio</span>
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight mt-6 max-w-4xl" style={{ color: colors[50] }}>
            <span className="word" data-delay="1000">Find</span>
            <span className="word" data-delay="1200">out</span>
            <span className="word" data-delay="1400">More</span>
            <span className="word" data-delay="1600">about</span>
            <span className="word" data-delay="1800">MJP</span>
            <span className="word" data-delay="2000">IT</span>
          </h1>
          
          <p className="max-w-xl mt-8 text-sm md:text-base font-light tracking-wide opacity-50 leading-relaxed mx-auto">
            <span className="word" data-delay="2200">Showcasing</span>
            <span className="word" data-delay="2400">high-performance</span>
            <span className="word" data-delay="2600">frontend</span>
            <span className="word" data-delay="2800">engineering</span>
            <span className="word" data-delay="3000">and</span>
            <span className="word" data-delay="3200">secure</span>
            <span className="word" data-delay="3400">AWS</span>
            <span className="word" data-delay="3600">cloud</span>
            <span className="word" data-delay="3800">architectures.</span>
          </p>

          {/* Integrated UI Discovery System */}
          <div className={`scroll-hint ${scrolled ? "hidden-node" : ""}`}>
            <span className="text-xs font-mono tracking-[0.35em] uppercase opacity-50" style={{ color: colors[100] }}>
              Explore Platform
            </span>
            <svg 
              className="w-7 h-7 bounce-arrow opacity-70" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.75" 
              viewBox="0 0 24 24" 
              stroke={colors[200]}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Project Grid Section (Scrollable Area) */}
        <div className="pb-24">
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}