import React from "react";

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "Google Cloud Associate Cloud Engineer",
  "CompTIA Security+",
];

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#c8b4a0] opacity-60">
          Behind the Infrastructure
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-extralight tracking-wider text-[#e6e1d7] uppercase">
          Martin Paszkowski
        </h2>
        <div className="mt-4 mx-auto w-16 h-px bg-[#c8b4a0] opacity-30"></div>
      </div>

      <div className="group relative rounded-lg border border-[#c8b4a0]/20 bg-gradient-to-r from-black/60 to-[#c8b4a0]/5 p-8 md:p-12 backdrop-blur-md transition-all duration-300 hover:border-[#c8b4a0]/40">
        <p className="text-sm md:text-base font-light leading-relaxed text-[#e6e1d7]/80 max-w-3xl mx-auto text-center">
          I run multi-cloud infrastructure the way a control room runs a plant floor
          — watching the metrics, catching drift before it becomes downtime, and
          keeping cost and risk in view at all times.
        </p>

        <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-[#e6e1d7]/60 max-w-3xl mx-auto text-center">
          Five years of concurrent multi-cloud engineering across AWS, Azure, and
          GCP, on top of 15+ years in enterprise IT and technical operations —
          including keeping 5,000+ networked payment endpoints at 99%+ uptime
          earlier in my career. Every project below is something I built and
          operate myself.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {certifications.map((cert, i) => (
            <span
              key={i}
              className="rounded bg-[#c8b4a0]/10 px-2.5 py-1 text-xs font-mono text-[#c8b4a0] border border-[#c8b4a0]/20"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
            href="https://cloud-dashboard-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#c8b4a0] opacity-90 hover:opacity-100 transition-opacity border border-[#c8b4a0]/30 rounded px-5 py-2.5 hover:border-[#c8b4a0]/60"
          >
            View Live Dashboard &rarr;
          </a>
          
            href="/resume/Martin_Paszkowski_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#e6e1d7]/80 opacity-90 hover:opacity-100 hover:text-[#c8b4a0] transition-all border border-[#c8b4a0]/10 rounded px-5 py-2.5 hover:border-[#c8b4a0]/40"
          >
            Download Resume &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
