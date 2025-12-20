"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Terminal,
  Server,
  Code2,
  Container,
  Cpu
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/ravidulundu", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/ravidulundu", icon: Linkedin },
  { name: "X", url: "https://x.com/ravidulundu", icon: Twitter },
  { name: "dulundu.tools", url: "https://dulundu.tools", icon: ExternalLink },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: Code2 },
  { category: "Backend", items: ["Node.js", "Bun", "Hono", "PostgreSQL"], icon: Server },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Ubuntu", "Nginx"], icon: Container },
  { category: "Tools", items: ["VS Code", "Claude", "Copilot", "Notion"], icon: Cpu },
];

const projects = [
  {
    name: "dulundu.tools",
    description: "Developer utilities platform with Chrome extension integration",
    tech: ["TypeScript", "React", "Cloudflare Workers"],
    url: "https://dulundu.tools",
  },
  {
    name: "DevOps Ubuntu Setup",
    description: "Automation scripts for Ubuntu 24.04 server provisioning",
    tech: ["Bash", "Ubuntu", "Security"],
    url: "https://github.com/ravidulundu/devops-ubuntu",
  },
  {
    name: "AI Dev Containers",
    description: "Docker workspaces with VS Code Remote and AI CLIs",
    tech: ["Docker", "VS Code", "AI"],
    url: "https://github.com/ravidulundu",
  },
  {
    name: "1453-WSL-Architect",
    description: "CLI for Windows Subsystem for Linux environments",
    tech: ["PowerShell", "WSL", "CLI"],
    url: "https://github.com/ravidulundu/1453-WSL-Architect",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* Terminal Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-500">$</span> whoami
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Ravi Dulundu
          </h1>
          <p className="text-xl text-amber-400 font-mono mb-6">
            Full Stack Developer & DevOps
          </p>

          {/* Bio */}
          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-2xl">
            Blending UX research, accessibility, and performance to launch polished frontends.
            Building developer tooling that maintains team velocity and consistency.
          </p>

          {/* Location */}
          <p className="text-neutral-500 mb-8 flex items-center gap-2">
            <span className="text-lg">🇧🇷</span>
            <span>Brazil / Salvador</span>
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-amber-500/50 hover:text-amber-400"
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Skills Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-8">
            <span className="text-neutral-500">$</span> cat skills.json
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={item}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <skill.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-neutral-200">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-mono text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Projects Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-8">
            <span className="text-neutral-500">$</span> ls projects/
          </h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className="group block rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:border-amber-500/30 hover:bg-neutral-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors mb-2 flex items-center gap-2">
                      {project.name}
                      <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs font-mono text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 font-mono text-sm">
            <Terminal className="h-4 w-4 text-amber-400" />
            <span className="text-neutral-500">$</span>
            <span className="text-neutral-400">dulundu.dev</span>
            <span className="text-neutral-600">--status</span>
            <span className="text-emerald-400">active</span>
          </div>
          <p className="mt-4 text-xs text-neutral-600">
            Built with Next.js & Tailwind CSS
          </p>
        </motion.footer>

      </div>
    </main>
  );
}
