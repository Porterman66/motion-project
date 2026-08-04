import React, { useState } from "react";

const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Google Cloud Associate Cloud Engineer",
  "CompTIA Security+",
];

const skillCategories = [
  {
    label: "Cloud Platforms",
    items: ["AWS (EC2, S3, IAM, VPC, CloudWatch, CloudTrail)", "Microsoft Azure (Hybrid Admin, M365)", "Google Cloud Platform (GKE, Billing, IAM)"],
  },
  {
    label: "Containers & IaC",
    items: ["Docker", "Kubernetes (GKE, Helm, Ingress)", "Terraform"],
  },
  {
    label: "Cloud Governance & FinOps",
    items: ["Resource tagging & rightsizing", "Lifecycle management", "Cost visibility & reporting"],
  },
  {
    label: "Security & Compliance",
    items: ["IAM", "ISO 27001 / PCI DSS practices", "Microsoft Sentinel, Splunk"],
  },
  {
    label: "Scripting & Tooling",
    items: ["Python (pandas, openpyxl)", "Bash, PowerShell", "Java, JavaScript"],
  },
  {
    label: "Networking & Security",
    items: ["TCP/IP, VPN, VLANs", "Firewalls", "Routing & Switching"],
  },
];

export default function AboutSection() {
  const [showSkills, setShowSkills] = useState(false);

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
          - watching the metrics, catching drift before it becomes downtime, and
          keeping cost and risk in view at all times.
        </p>

        <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-[#e6e1d7]/60 max-w-3xl mx-auto text-center">
          Five years of concurrent multi-cloud engineering across AWS, Azure, and
          GCP, on top of 15+ years in enterprise IT and technical operations -
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
          <a
            href="https://cloud-dashboard-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#c8b4a0] opacity-90 hover:opacity-100 transition-opacity border border-[#c8b4a0]/30 rounded px-5 py-2.5 hover:border-[#c8b4a0]/60"
          >
            View Live Dashboard &rarr;
          </a>
          <button
            onClick={() => setShowSkills(true)}
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#e6e1d7]/80 opacity-90 hover:opacity-100 hover:text-[#c8b4a0] transition-all border border-[#c8b4a0]/10 rounded px-5 py-2.5 hover:border-[#c8b4a0]/40"
          >
            View Skill Set &rarr;
          </button>
        </div>
      </div>

      {showSkills && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setShowSkills(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg border border-[#c8b4a0]/30 bg-[#1a1d18] p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSkills(false)}
              className="absolute top-4 right-5 text-[#c8b4a0] text-lg opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              &times;
            </button>

            <span className="text-[10px] font-mono tracking-widest uppercase text-[#c8b4a0] opacity-60">
              Technical Skill Set
            </span>
            <h3 className="mt-2 text-xl md:text-2xl font-extralight tracking-wider text-[#e6e1d7] uppercase">
              Core Competencies
            </h3>
            <div className="mt-4 mb-8 w-12 h-px bg-[#c8b4a0] opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((cat, i) => (
                <div key={i}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#c8b4a0] mb-2">
                    {cat.label}
                  </h4>
                  <ul className="space-y-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm font-light text-[#e6e1d7]/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
