import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import kyaatImg from "../../public/assets/images/Kyaat.png";
import portfolioImg from "../../public/assets/images/Project.png";
import canteenImg from "../../public/assets/images/canteen.png";

const FeaturedProject = ({ type, title, summary, link, github, img, imgAlt, tags = [], highlights = [] }) => {
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
                  title="Datalytics — AI-Powered Business Intelligence SaaS"
                  summary="Contributed to an AI-powered Business Intelligence & Analytics SaaS platform featuring conversational data analysis, Model Context Protocol (MCP) server tools, and dynamic user-requested reporting."
                  highlights={[
                    "Developed and maintained SaaS platform features, including MCP server tools enabling AI-assisted interaction with platform data and functionality.",
                    "Integrated an open-source large language model (LLM) to support natural-language questions about business data and analytics insights.",
                    "Implemented dynamic report and dashboard generation covering working hours, time spent, issues created/closed, and comparative employee work activity.",
                  ]}
                  tags={["Angular", "Node.js", "NestJS", "PostgreSQL", "Model Context Protocol (MCP)", "Open-Source LLM", "SaaS"]}
                />
              </div>

              {/* 2. ERP Project — Tannery Application */}
              <div className="col-span-12">
                <FeaturedProject
                  type="Enterprise System @ Megam Technologies"
                  title="ERP — Tannery Application"
                  summary="Developed and maintained an Enterprise Resource Planning (ERP) application tailored for tannery operations using PHP, jQuery, JavaScript, and PostgreSQL, supporting core business workflows, interactive UI modules, reporting, and production deployments."
                  highlights={[
                    "Built and maintained full-stack ERP modules with PHP, jQuery, JavaScript, and PostgreSQL, implementing CRUD operations and integrating workflows.",
                    "Created and modified SQL queries, views, materialized views, functions, and triggers to support complex business requirements and troubleshoot data issues.",
                    "Configured Nginx and Apache web servers and worked with GitLab CI/CD pipelines, Git, and Postman for API testing and deployment.",
                  ]}
                  tags={["PHP", "jQuery", "JavaScript", "PostgreSQL", "SQL Views & Triggers", "Nginx", "Apache", "GitLab CI/CD"]}
                />
              </div>

              {/* 3. Personal Portfolio using Next.js */}
              <div className="col-span-12">
                <FeaturedProject
                  type="Web Development — Next.js Portfolio"
                  title="Developer Portfolio (Next.js)"
                  summary="Designed and built a modern, responsive personal developer portfolio using Next.js, Tailwind CSS, and Framer Motion to showcase full-stack engineering experience, SaaS & ERP projects, awards, and verified certifications."
                  img={portfolioImg}
                  imgAlt="Boobalan V Personal Portfolio Preview"
                  github="https://github.com/BoobalanIT/Portfolio"
                  link="https://alanz.netlify.app"
                  tags={["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive UI"]}
                />
              </div>

              {/* 4. Others */}
              <div className="col-span-6 max-md:col-span-12">
                <Project
                  type="Computer Vision & HCI"
                  title="KYAAT — Gesture-Controlled Mouse"
                  summary="Developed a real-time computer-vision tool using Python and OpenCV to recognize hand movements and landmarks and translate gestures into mouse cursor interactions with sub-20ms response latency."
                  img={kyaatImg}
                  imgAlt="KYAAT Hand Gesture Recognition"
                  github="https://github.com/BoobalanIT/KYAAT"
                  tags={["Python", "OpenCV", "Computer Vision", "Sub-20ms Latency"]}
                />
              </div>

              <div className="col-span-6 max-md:col-span-12">
                <Project
                  type="Mobile App Project"
                  title="MSAJCE Canteen — Android Ordering App"
                  summary="Android mobile commerce application built to streamline campus cafeteria menu browsing, order processing, and pickup management."
                  img={canteenImg}
                  imgAlt="MSAJCE Canteen Android App Logo"
                  tags={["Android", "Java", "Mobile Development"]}
                />
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
