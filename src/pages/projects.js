import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import kyaatImg from "../../public/assets/images/Kyaat.png";
import portfolioImg from "../../public/assets/images/Project.png";
import canteenImg from "../../public/assets/images/canteen.png";

const FeaturedProject = ({ type, title, summary, link, github, img, imgAlt, tags = [], highlights = [], note }) => {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 rounded-3xl border border-solid border-dark bg-light p-5 sm:p-8 lg:p-10 xl:p-12 shadow-2xl dark:border-light dark:bg-dark"
    >
      {img && (
        <a
          href={github || link || "#"}
          target="_blank"
          rel="noreferrer"
          className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-2xl border border-dark/20 dark:border-light/20 bg-white flex items-center justify-center"
        >
          <Image
            src={img}
            alt={imgAlt || title}
            className="w-full h-auto max-h-[340px] object-contain hover:scale-105 transition-transform duration-300"
            priority={false}
          />
        </a>
      )}

      <div className={`${img ? "w-full lg:w-1/2" : "w-full"} flex flex-col items-start justify-between text-left`}>
        <span className="text-primary font-semibold text-base sm:text-lg lg:text-xl dark:text-primaryDark">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-light">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light text-sm sm:text-base leading-relaxed">
          {summary}
        </p>

        {highlights.length > 0 && (
          <ul className="list-disc pl-5 my-2 space-y-1.5 text-sm font-medium leading-relaxed text-dark/85 dark:text-light/85">
            {highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-full border border-dark/30 dark:border-light/30 bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {note && (
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 dark:bg-primaryDark/10 text-xs sm:text-sm font-semibold text-primary dark:text-primaryDark">
            🔒 {note}
          </div>
        )}

        {(github || link) && (
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-dark text-light p-2.5 px-6 text-lg font-semibold border-2 border-dark dark:bg-light dark:text-dark dark:border-light hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light max-sm:px-4 max-sm:text-base transition-colors"
              >
                View on GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-dark dark:border-light p-2.5 px-6 text-lg font-semibold text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark max-sm:px-4 max-sm:text-base transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, summary, img, imgAlt, github, tags = [] }) => {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-full flex flex-col items-start justify-between rounded-2xl border border-solid border-dark bg-light p-5 sm:p-6 relative dark:border-light dark:bg-dark shadow-lg"
    >
      <div className="w-full">
        {img && (
          <div className="w-full h-52 overflow-hidden rounded-xl border border-dark/15 dark:border-light/15 bg-white flex items-center justify-center mb-4">
            <Image
              src={img}
              alt={imgAlt || title}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <span className="text-primary font-semibold text-base dark:text-primaryDark">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light max-sm:text-xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark/90 dark:text-light/90 text-sm leading-relaxed text-left">
          {summary}
        </p>
      </div>

      <div className="w-full mt-3">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-sm font-bold underline underline-offset-2 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
          >
            GitHub Repository &rarr;
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Boobalan V | Projects</title>
        <meta
          name="description"
          content="Explore Boobalan V's full-stack software development projects, AI & MCP platforms, computer vision tools, and web applications."
        />
      </Head>
      <Layout>
        <article className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <div className="z-0 inline-block h-full w-full bg-light px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32 lg:py-16 dark:bg-dark">
            <AnimatedText
              text="Code, Systems & AI In Action!"
              className="mb-10 md:mb-14 lg:mb-16 !text-3xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl"
            />

            <div className="grid grid-cols-12 gap-y-10 md:gap-8 md:gap-y-14 lg:gap-12 lg:gap-y-16">
              {/* 1. Datalytics SaaS Product */}
              <div className="col-span-12">
                <FeaturedProject
                  type="SaaS Product @ Megam Technologies"
                  title="Datalytics — AI-Powered Business Intelligence Platform"
                  summary="Business Intelligence and Analytics platform featuring natural-language data queries via open-source LLM, custom Model Context Protocol (MCP) server tools, automated reporting, and Nginx reverse proxy architecture."
                  highlights={[
                    "Developed frontend user interfaces in Angular and backend REST APIs in Node.js / NestJS for business analytics dashboards.",
                    "Integrated an open-source large language model (LLM) using Model Context Protocol (MCP), enabling users to ask business questions in natural language and receive instant data insights.",
                    "Built dynamic report and dashboard generation to monitor operational metrics such as working hours, task progress, and completed issues.",
                    "Configured Nginx reverse proxy routing between the Angular client and backend API services; managed GitLab CI/CD pipelines for automated testing and deployments.",
                  ]}
                  tags={["Angular", "Node.js", "NestJS", "PostgreSQL", "Nginx (Reverse Proxy)", "Model Context Protocol (MCP)", "Open-Source LLM", "GitLab CI/CD", "SaaS"]}
                  note="Proprietary, built at Megam Technologies"
                  link="https://getdatalytics.com"
                />
              </div>

              {/* 2. Datalytics — UI Component Library & Embed SDK */}
              <div className="col-span-12">
                <FeaturedProject
                  type="Developer SDK & UI Component Library @ Megam Technologies"
                  title="Datalytics — UI Component Library & Embed SDK"
                  summary="Independent, reusable Angular UI component library and client Embed SDK developed for the Datalytics enterprise platform, enabling modular data visualization and secure third-party dashboard embedding."
                  highlights={[
                    "UI Component Library: Developed an independent, reusable Angular component library featuring interactive charts (bar, line, area, and pie), KPI widgets with trend indicators, and data tables with sorting, filtering, and pagination. Maintained independent versioning and published the package to npm.",
                    "Embed SDK: Developed a reusable Embed SDK within the main application repository, with a dedicated package.json and independent npm publishing configuration. Enabled third-party applications to embed live analytics dashboards using token-based authentication.",
                    "Package Management & Integration: Managed independent versioning and npm releases for both packages, and integrated updated library versions into the main Datalytics SaaS platform.",
                    "Architecture & Third-Party Integration: Designed clean TypeScript APIs, responsive iframe container messaging, and efficient DOM rendering for seamless external embedding.",
                  ]}
                  tags={["Angular", "TypeScript", "JavaScript", "UI Component Library", "Embed SDK", "Dedicated package.json", "npm Registry", "Data Visualization", "Token Authentication"]}
                  note="Proprietary, built at Megam Technologies"
                  link="https://getdatalytics.com"
                />
              </div>

              {/* 3. ERP Project — LeatherLink TanPro 11.0 (TMS) */}
              <div className="col-span-12">
                <FeaturedProject
                  type="Enterprise Multi-Tenant ERP @ Megam Technologies"
                  title="LeatherLink TanPro 11.0 (TMS): Multi-Tenant Industrial ERP"
                  summary="Multi-tenant enterprise ERP system managing manufacturing, inventory, supply chain, and billing across 300+ database tables."
                  highlights={[
                    "Developed and maintained core ERP modules across 300+ database tables covering manufacturing operations, inventory, supply chain, and billing using PHP and PostgreSQL.",
                    "Implemented schema-per-tenant data isolation in PostgreSQL for customer data security, paired with MongoDB for audit logs and approval workflows.",
                    "Wrote and optimized SQL queries, views, materialized views, functions, and triggers to handle production batch tracking and inventory updates.",
                    "Built automated PDF generation for delivery challans, invoices, and job cards using mPDF.",
                    "Deployed and maintained the application on Apache with PHP-FPM, configuring virtual hosts, process pools, and server environments.",
                  ]}
                  tags={["PHP", "PostgreSQL (Schema-Per-Tenant)", "MongoDB (Audit Logs)", "Apache & PHP-FPM", "mPDF", "SQL Queries & Triggers", "Batch Tracking", "ERP"]}
                  note="Proprietary, built at Megam Technologies"
                />
              </div>

              {/* 3. KYAAT — Gesture-Controlled Mouse */}
              <div className="col-span-12">
                <FeaturedProject
                  type="Computer Vision & HCI"
                  title="KYAAT — Gesture-Controlled Mouse"
                  summary="Developed a real-time computer-vision tool using Python and OpenCV to recognize hand movements and landmarks and translate gestures into mouse cursor interactions with sub-20ms response latency."
                  img={kyaatImg}
                  imgAlt="KYAAT Hand Gesture Recognition"
                  github="https://github.com/BoobalanIT/KYAAT"
                  highlights={[
                    "Engineered real-time hand-landmark detection using OpenCV, translating optical gestures into smooth mouse cursor navigation and click events.",
                    "Optimized image processing pipeline to achieve sub-20ms execution latency for touch-free desktop interaction.",
                  ]}
                  tags={["Python", "OpenCV", "Computer Vision", "Sub-20ms Latency", "Human-Computer Interaction"]}
                />
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
