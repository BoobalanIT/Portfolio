import { useState } from "react";
import {
  siAngular,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siNestjs,
  siExpress,
  siPhp,
  siPostgresql,
  siMongodb,
  siMysql,
  siGit,
  siGitlab,
  siDocker,
  siNginx,
  siApache,
  siPostman,
  siModelcontextprotocol,
} from "simple-icons";
import SkillCard from "./SkillCard";

const BrandIcon = ({ icon, monochrome = false }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={`h-12 w-12 ${monochrome ? "text-slate-900 dark:text-slate-100" : ""}`}
    fill={monochrome ? "currentColor" : `#${icon.hex}`}
    aria-hidden="true"
  >
    <path d={icon.path} />
  </svg>
);

const RestApiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-12 w-12"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="restApiCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <path
      d="M6.5 19h11.25a4.25 4.25 0 0 0 .56-8.46A5.75 5.75 0 0 0 7.12 8.76 4.75 4.75 0 0 0 6.5 19Z"
      fill="url(#restApiCloudGrad)"
    />
    <g stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round">
      <line x1="12" y1="9.9" x2="12" y2="16.5" />
      <line x1="8.7" y1="13.2" x2="15.3" y2="13.2" />
      <line x1="9.7" y1="10.9" x2="14.3" y2="15.5" />
      <line x1="14.3" y1="10.9" x2="9.7" y2="15.5" />
    </g>
    <circle cx="12" cy="13.2" r="2.2" fill="#ffffff" />
    <circle cx="12" cy="13.2" r="1.0" fill="#2563EB" />
  </svg>
);

const LlmIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-12 w-12 text-blue-600 dark:text-blue-400"
    aria-hidden="true"
  >
    <path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1a3 3 0 0 0 0-6v-1a3 3 0 0 0-3-3V6a3 3 0 0 0-3-3Z" fill="currentColor" fillOpacity="0.1" />
    <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
    <circle cx="14.5" cy="11.5" r="1" fill="currentColor" />
    <path d="M9.5 15.5c.8.7 4.2.7 5 0" />
  </svg>
);

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools & DevOps",
  "AI & Integration",
];

const SKILLS = [
  // Frontend
  { name: "Angular", category: "Frontend", icon: <BrandIcon icon={siAngular} /> },
  { name: "TypeScript", category: "Frontend", icon: <BrandIcon icon={siTypescript} /> },
  { name: "JavaScript", category: "Frontend", icon: <BrandIcon icon={siJavascript} /> },

  // Backend
  { name: "Node.js", category: "Backend", icon: <BrandIcon icon={siNodedotjs} /> },
  { name: "NestJS", category: "Backend", icon: <BrandIcon icon={siNestjs} /> },
  { name: "Express.js", category: "Backend", icon: <BrandIcon icon={siExpress} monochrome /> },
  { name: "PHP", category: "Backend", icon: <BrandIcon icon={siPhp} /> },
  { name: "REST APIs", category: "Backend", icon: <RestApiIcon /> },

  // Database
  { name: "PostgreSQL", category: "Database", icon: <BrandIcon icon={siPostgresql} /> },
  { name: "MongoDB", category: "Database", icon: <BrandIcon icon={siMongodb} /> },
  { name: "MySQL", category: "Database", icon: <BrandIcon icon={siMysql} /> },

  // Tools & DevOps
  { name: "Git", category: "Tools & DevOps", icon: <BrandIcon icon={siGit} /> },
  { name: "GitLab CI/CD", category: "Tools & DevOps", icon: <BrandIcon icon={siGitlab} /> },
  { name: "Docker", category: "Tools & DevOps", icon: <BrandIcon icon={siDocker} /> },
  { name: "Nginx", category: "Tools & DevOps", icon: <BrandIcon icon={siNginx} /> },
  { name: "Apache", category: "Tools & DevOps", icon: <BrandIcon icon={siApache} /> },
  { name: "Postman", category: "Tools & DevOps", icon: <BrandIcon icon={siPostman} /> },

  // AI & Integration
  { name: "MCP", category: "AI & Integration", icon: <BrandIcon icon={siModelcontextprotocol} monochrome /> },
  { name: "LLM Integration", category: "AI & Integration", icon: <LlmIcon /> },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section
      aria-labelledby="skills-heading"
      className="relative mt-28 overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-b from-[#eaf2ff] via-[#f2f7ff] to-[#e6f0ff] px-6 py-14 shadow-inner dark:border-slate-800 dark:from-slate-900 dark:via-slate-900/85 dark:to-slate-950 sm:px-10 sm:py-16"
    >
      {/* Subtle light-blue ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-950/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl dark:bg-sky-950/30"
      />

      {/* Section Heading */}
      <div className="relative mx-auto mb-8 max-w-2xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-blue-200 dark:bg-blue-800 sm:w-20" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 sm:text-sm">
            WHAT I WORK WITH
          </p>
          <span className="h-px w-12 bg-blue-200 dark:bg-blue-800 sm:w-20" aria-hidden="true" />
        </div>
        <h2
          id="skills-heading"
          className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="relative mb-10 flex flex-wrap items-center justify-center gap-2"
      >
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                isActive
                  ? "bg-blue-600 text-white shadow-xs dark:bg-blue-500"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Unified Responsive Large-Icon Grid */}
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 sm:gap-5">
        {visibleSkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
