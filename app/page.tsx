import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Hero } from "@/components/ui/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { Navbar } from "@/components/ui/Navbar";
import {
  Code,
  Terminal,
  Cpu,
  Globe,
  Zap,
  Shield
} from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <Hero />

      <section id="about" className="py-20">
        <h2 className="text-center text-xl font-medium text-neutral-400 mb-8 uppercase tracking-widest">
          Trusted by Industry Leaders
        </h2>
        <Marquee
          items={["Google", "Microsoft", "Netflix", "Uber", "Airbnb", "Amazon", "Meta", "Apple"]}
          speed={80}
        />
        <div className="h-4" />
        <Marquee
          items={["Startup Inc.", "NextGen AI", "FutureTech", "DevOps Pro", "CloudScale", "DataFlow"]}
          direction="right"
          speed={80}
        />
      </section>

      <section id="features" className="py-20 max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-12">
          Everything you need <br /> to build agents.
        </h2>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>

      <footer className="py-10 border-t border-neutral-800 text-center text-neutral-500">
        <p>© {new Date().getFullYear()} X-Agent. All rights reserved.</p>
      </footer>
    </main>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50"></div>
);

const items = [
  {
    title: "The Agentic Revolution",
    description: "Build agents that can see, hear, and code along with you.",
    header: <Skeleton />,
    icon: <Terminal className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Infrastructure",
    description: "Deploy your agents to a global edge network in seconds.",
    header: <Skeleton />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security for your mission-critical agents.",
    header: <Skeleton />,
    icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lightning Fast Inference",
    description:
      "Powered by the latest TPUs and GPUs for sub-millisecond latency.",
    header: <Skeleton />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Code Generation",
    description: "Let the AI write the boilerplate while you focus on the logic.",
    header: <Skeleton />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Multi-Model Support",
    description: "Switch between Gemini, GPT-4, and Claude with a single config.",
    header: <Skeleton />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
];
