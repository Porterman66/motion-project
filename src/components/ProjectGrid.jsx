import React from "react";

const featuredDashboard = {
  title: "React Cloud Dashboard & Observability Engine",
  description: "An enterprise-grade cloud resource monitoring cockpit. Integrates directly with AWS CloudWatch metric streams to deliver real-time system performance insights, infrastructure telemetry parsing, and latency alerting dashboards.",
  tech: ["React 19", "Tailwind CSS", "AWS SDK", "Recharts", "Observability"],
  link: "https://github.com/Porterman66/cloud-dashboard"
};

const infrastructureProjects = [
  {
    title: "AWS Serverless API",
    description: "A highly-scalable serverless REST API built using API Gateway, AWS Lambda, and DynamoDB.",
    tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Node.js"],
    link: "https://github.com/Porterman66/aws-finops-pipeline",
  },
  {
    title: "VPC Network Architecture",
    description: "Multi-AZ VPC infrastructure featuring public/private subnets, NAT gateways, and secure Network Access Control Lists (NACLs).",
    tech: ["AWS VPC", "CloudFormation", "IAM", "Networking"],
    link: "https://github.com/Porterman66/vpc-architecture",
  },
  {
    title: "Azure Zero-Trust Infrastructure",
    description: "Enterprise landing zone leveraging Azure Key Vault, Managed Identities, and strict RBAC to eliminate hardcoded cloud secrets.",
    tech: ["Azure", "Terraform", "Security", "KeyVault"],
    link: "https://github.com/Porterman66/azure-zero-trust",
  },
  {
    title: "GCP Enterprise Resource Hierarchy",
    description: "Automated Google Cloud landing zone enforcing programmatic Organization Policies and segregated multi-tenant folders.",
    tech: ["GCP", "Terraform", "Governance", "IAM"],
    link: "https://github.com/Porterman66/gcp-landing-zone",
  }
];

export default function ProjectGrid() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extralight tracking-wider text-[#e6e1d7] uppercase">
          Cloud Architecture & Projects
        </h2>
        <div className="mt-4 mx-auto w-16 h-px bg-[#c8b4a0] opacity-30"></div>
      </div>

      {/* Premium Featured Full-Width Dashboard Panel */}
      <div className="mb-10 group relative rounded-lg border border-[#c8b4a0]/20 bg-gradient-to-r from-black/60 to-[#c8b4a0]/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#c8b4a0]/40 hover:shadow-[0_0_30px_rgba(200,180,160,0.1)]">
        <span className="absolute top-4 right-6 text-[10px] font-mono tracking-widest uppercase text-[#c8b4a0] opacity-60">Featured Telemetry Hub</span>
        <h3 className="text-xl font-medium text-[#f8f7f5] transition-colors group-hover:text-[#c8b4a0]">
          {featuredDashboard.title}
        </h3>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#e6e1d7]/70 max-w-3xl">
          {featuredDashboard.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {featuredDashboard.tech.map((techItem, index) => (
            <span key={index} className="rounded bg-[#c8b4a0]/10 px-2.5 py-1 text-xs font-mono text-[#c8b4a0] border border-[#c8b4a0]/20">
              {techItem}
            </span>
          ))}
        </div>
        <a href={featuredDashboard.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#c8b4a0] opacity-80 hover:opacity-100 transition-opacity">
          Launch Dashboard Code &rarr;
        </a>
      </div>

      {/* Symmetrical 2x2 Infrastructure Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infrastructureProjects.map((project, index) => (
          <div key={index} className="group relative rounded-lg border border-[#c8b4a0]/10 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#c8b4a0]/40 hover:shadow-[0_0_20px_rgba(200,180,160,0.15)]">
            <h3 className="text-lg font-medium text-[#f8f7f5] transition-colors group-hover:text-[#c8b4a0]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#e6e1d7]/60">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((techItem, techIndex) => (
                <span key={techIndex} className="rounded bg-[#c8b4a0]/5 px-2 py-1 text-xs font-mono text-[#c8b4a0]/80 border border-[#c8b4a0]/10">
                  {techItem}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#c8b4a0] opacity-80 hover:opacity-100 transition-opacity">
              View Code &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}