"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

// ---- Social Icon SVGs (exact from demo) ----
const GlobeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" className={className}>
    <path fill="none" d="M0 0h512v512H0z" />
    <path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" className={className}>
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width="256" height="256" fill="#fff" rx="60" />
      <rect width="256" height="256" fill="#0A66C2" rx="60" />
      <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" />
    </g>
  </svg>
);

const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

// Custom Link with animated underline
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} rounded relative group`}>
      {title}
      <span
        className={`
          inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// Hamburger menu link for mobile
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} rounded relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`
          inline-block h-[1px] bg-light absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium dark:text-light max-lg:px-16 max-md:px-12 max-sm:px-6 relative z-10">
      {/* Hamburger Button (Mobile / Tablet) */}
      <button
        className="flex-col items-center justify-center hidden max-lg:flex z-40 p-2 focus:outline-none"
        onClick={handleClick}
        aria-label="Toggle main menu"
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}
        />
      </button>

      {/* Mobile Theme Toggle (Right Header) */}
      <div className="hidden max-lg:flex items-center z-40">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-7 h-7 ease flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          aria-label="Toggle theme"
        >
          {mode === "dark" ? (
            <SunIcon className="w-full h-auto fill-dark" />
          ) : (
            <MoonIcon className="w-full h-auto fill-dark" />
          )}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="w-full flex justify-between items-center max-lg:hidden">
        <nav className="flex items-center justify-center gap-1">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Credentials" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-1">
          <a href="https://github.com/BoobalanIT" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-6 mx-3 hover:-translate-y-0.5 transition-transform">
            <GithubIcon className="w-full h-auto" />
          </a>
          <a href="https://www.linkedin.com/in/boobalan001/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-6 mx-3 hover:-translate-y-0.5 transition-transform">
            <LinkedInIcon className="w-full h-auto" />
          </a>
          <a href="https://alanz-tech.netlify.app" target="_blank" rel="noreferrer" aria-label="Previous Portfolio" className="w-6 mx-3 hover:-translate-y-0.5 transition-transform">
            <GlobeIcon className="w-full h-auto" />
          </a>
          <a href="mailto:boobalanvaithiyanthan1@gmail.com" aria-label="Email" className="w-6 mx-3 hover:-translate-y-0.5 transition-transform">
            <MailIcon className="w-full h-auto" />
          </a>

          {/* Desktop Theme Switcher */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className="w-full h-auto fill-dark" />
            ) : (
              <MoonIcon className="w-full h-auto fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* Center Logo */}
      <div className="absolute left-[50%] top-4 -translate-x-1/2 max-sm:top-3">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full w-16 h-16 max-sm:w-12 max-sm:h-12 bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-2xl max-sm:text-lg font-bold shadow-md"
        >
          BV
        </Link>
      </div>

      {/* Mobile Menu Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 dark:bg-black/70 backdrop-blur-sm p-4"
          onClick={handleClick}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-[85vw] max-w-[360px] flex flex-col items-center justify-between bg-dark dark:bg-light text-light dark:text-dark rounded-2xl py-10 px-6 shadow-2xl border border-light/20 dark:border-dark/20"
          >
            <nav className="flex flex-col items-center justify-center text-xl font-bold gap-3">
              <CustomMobileLink href="/" title="Home" toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
              <CustomMobileLink href="/articles" title="Credentials" toggle={handleClick} />
              <CustomMobileLink href="/contact" title="Contact" toggle={handleClick} />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-8 gap-5">
              <a href="https://github.com/BoobalanIT" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-6 text-light dark:text-dark hover:opacity-80">
                <GithubIcon className="w-full h-auto" />
              </a>
              <a href="https://www.linkedin.com/in/boobalan001/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-6 text-light dark:text-dark hover:opacity-80">
                <LinkedInIcon className="w-full h-auto" />
              </a>
              <a href="https://alanz-tech.netlify.app" target="_blank" rel="noreferrer" aria-label="Previous Portfolio" className="w-6 text-light dark:text-dark hover:opacity-80">
                <GlobeIcon className="w-full h-auto" />
              </a>
              <a href="mailto:boobalanvaithiyanthan1@gmail.com" aria-label="Email" className="w-6 text-light dark:text-dark hover:opacity-80">
                <MailIcon className="w-full h-auto" />
              </a>
            </nav>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
