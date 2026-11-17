import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";

type SkillIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface Skill {
  name: string;
  icon?: SkillIcon;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface WorkItem {
  company: string;
  href?: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  href?: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export const DATA = {
  name: "Sobhan Hadikhah",
  initials: "SH",
  // TODO: set your real domain before building (used for canonical URLs, sitemap, Open Graph).
  url: "https://sobhanhadikhah.github.io/",
  jobTitle: "Frontend Developer",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/place/Tehran",
  description:
    "Frontend Developer specializing in credit-scoring and installment payment systems for high-traffic e-commerce platforms.",
  summary:
    "Results-driven Frontend Developer with **5+ years of experience**, specializing in credit-scoring and installment payment systems for high-traffic e-commerce platforms.\n\nI designed and built an end-to-end installment engine — due-date generation, multi-mode payment processing, automated penalty logic and cron-based scheduling — for a large-scale retail platform focused on installment sales, and engineered a live credit-validation system by integrating banking APIs to assess the creditworthiness of individual and corporate clients. I increased platform performance and load capacity by **50%**, an achievement formally recognized by the company's board of directors.\n\nI began my development career in 2021 as a freelancer, building a full LMS platform for Mehr Alborz University, Tehran. Today I also integrate AI agents into development and production workflows.",
  avatarUrl: "/profile.png",
  expertise: [
    {
      title: "Installment Payment Systems",
      description:
        "End-to-end design of due-date generation, multi-mode payment processing, penalty automation and cron-based scheduling for large-scale retail platforms.",
    },
    {
      title: "Credit Scoring & Bank Validation",
      description:
        "Real-time integration of banking APIs to assess creditworthiness and credit rank for individual and corporate clients.",
    },
    {
      title: "Financial System Architecture",
      description:
        "Complex, multi-scenario financial logic, interest/penalty rules, payment reconciliation and live pricing engines.",
    },
    {
      title: "Performance at Scale",
      description:
        "Delivered a 50% increase in platform load capacity, formally recognized by the board of directors.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript (OOP / class-based)" },
        { name: "Tailwind CSS" },
        { name: "Material UI" },
        { name: "Ant Design" },
        { name: "SEO for Next.js" },
      ],
    },
    {
      category: "Backend & Infrastructure",
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "REST APIs" },
        { name: "Server-side caching & optimization" },
        { name: "Role-Based Access Control" },
        { name: "Docker", icon: Docker },
        { name: "Git (enterprise workflow)" },
        { name: "Linux server basics" },
      ],
    },
    {
      category: "FinTech",
      items: [
        { name: "Credit scoring & bank rating APIs" },
        { name: "Installment payment systems" },
        { name: "Financial calculation logic" },
        { name: "Live pricing engines" },
      ],
    },
    {
      category: "AI & Agentic Engineering",
      items: [
        { name: "AI agent integration" },
        { name: "Spec-Driven Development (SDD)" },
        { name: "Agentic coding harnesses (Claude Code, Cursor, Codex CLI)" },
        { name: "Model Context Protocol (MCP)" },
        { name: "Prompt & context engineering" },
        { name: "Agent skills, hooks & subagents" },
        { name: "Multi-agent orchestration" },
        { name: "LLM API integration" },
        { name: "AI-assisted code review & testing" },
        { name: "Workflow automation" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Figma" },
        { name: "GitHub / GitLab" },
        { name: "Vercel" },
        { name: "Jest / React Testing Library" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Persian — Native" },
        { name: "English — B2, professional working proficiency" },
      ],
    },
  ] satisfies SkillGroup[],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hadikhahs@gmail.com",
    // Kept for reference only; intentionally not rendered on the public site.
    tel: "+98 905 664 2524",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sobhanhadikhah",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sobhan-hadikhah-515a90258/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hadikhahs@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Kart",
      location: "Tehran, Iran",
      title: "Senior Frontend Developer — Credit & Installment Systems",
      logoUrl: "/logo512x512.png",
      start: "2024",
      end: "Mar 2026",
      description: [
        "Architected and built a complete installment payment system from the ground up: due-date generation, multiple payment modes, automated cron jobs, and a penalty mechanism for missed due dates.",
        "Developed a live credit-scoring and validation engine, integrating third-party banking APIs to evaluate the creditworthiness and credit rank of individual and corporate clients in real time.",
        "Engineered complex financial calculation logic for multi-scenario installment plans, interest/penalty rules, and payment reconciliation.",
        "Built and maintained backend APIs and a caching system to support high-volume credit and payment operations, while managing server load and optimizing resource usage.",
        "Implemented a real-time (live) pricing engine integrated with the installment and credit modules.",
        "Implemented full SEO across the Next.js platform, including dynamic meta titles, structured data, and page-level optimization.",
        "Increased site performance and load capacity by 50%, an achievement formally recognized by the company's board of directors.",
        "Built custom modules for the marketing team and developed role-based admin panels with granular permission and category management.",
        "Designed reusable, object-oriented (class-based) JavaScript architecture for the installment and credit modules.",
        "Worked across Tailwind CSS, Material UI, and Ant Design to deliver consistent, scalable interfaces.",
        "Integrated AI agents into internal workflows and production features to streamline development and operations.",
      ],
    },
    {
      company: "Freelance",
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "",
      start: "2021",
      end: "2024",
      description: [
        "Designed and developed a full Learning Management System (LMS) for Mehr Alborz University, Tehran, including dashboards, course management, and role-based user systems.",
        "Began my development career by building interactive dashboards using React.",
        "Delivered multiple independent web projects for clients, handling frontend architecture, API integration, and deployment.",
        "Built a strong foundation in backend fundamentals and database design alongside frontend specialization.",
      ],
    },
  ] satisfies WorkItem[],
  education: [
    {
      school: "Azad University, Rasht",
      degree: "B.Sc. in Software Engineering",
      logoUrl: "/azad.png",
      start: "2023",
      end: "Present",
    },
  ] as EducationItem[],
  projects: [
    {
      title: "Installment & Credit Management System",
      href: "",
      dates: "2024 - 2026",
      active: true,
      description:
        "End-to-end installment engine with automated due dates, penalty logic, and live bank credit-scoring integration for individual and corporate clients. Contributed to a **50% platform performance increase**.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "REST APIs",
        "Caching",
        "Banking APIs",
        "Cron jobs",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "LMS – Mehr Alborz University",
      href: "",
      dates: "2021 - 2024",
      active: true,
      description:
        "Full learning management system for Mehr Alborz University (Tehran), built as a freelance project: dashboards, course management, and role-based user systems.",
      technologies: ["React", "Dashboards", "RBAC", "REST APIs"],
      links: [],
      image: "",
      video: "",
    },
  ],
};
