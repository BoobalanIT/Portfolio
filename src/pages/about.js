import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/assets/images/Pic2ss.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest <= value + 0.5) {
        ref.current.textContent = Math.min(Math.round(latest), value);
      }
    });
    return () => unsubscribe();
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

const Skill = ({ name, left, top }) => {
  return (
    <motion.div
      style={{ left, top }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-5 shadow-md cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 dark:text-dark dark:bg-light text-xs md:text-sm border border-dark/30 dark:border-light/30 whitespace-nowrap z-10 max-md:py-1 max-md:px-2.5 max-md:text-[10px]"
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Details = ({ position, company, companyLink, time, address, bullets = [], docLink, docLabel }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between max-md:w-[88%]"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="capitalize font-bold text-2xl max-sm:text-xl max-xs:text-lg">
          {position}&nbsp;
          {company && (
            companyLink && companyLink !== "#" ? (
              <a
                href={companyLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary dark:text-primaryDark capitalize hover:underline"
              >
                @{company}
              </a>
            ) : (
              <span className="text-primary dark:text-primaryDark capitalize">
                @{company}
              </span>
            )
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 max-xs:text-sm block mt-1">
          {time} | {address}
        </span>
        {bullets.length > 0 && (
          <ul className="list-disc pl-5 mt-3 space-y-1.5 font-medium text-dark/90 dark:text-light/90 max-md:text-sm">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {docLink && (
          <a
            href={docLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm font-bold text-primary dark:text-primaryDark underline underline-offset-2"
          >
            {docLabel || "View Document"} &rarr;
          </a>
        )}
      </motion.div>
    </li>
  );
};

const skillCategories = [
  {
    title: "Frontend",
    items: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Web Servers & Deployment",
    items: ["Nginx", "Apache", "Application Deployment"],
  },
  {
    title: "Tools & CI/CD",
    items: ["Git", "GitLab CI/CD", "Postman", "pgAdmin"],
  },
  {
    title: "AI & Integration",
    items: ["Open-source LLM Integration", "Model Context Protocol (MCP)", "AI-Powered Chatbot Integration"],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Boobalan V | About Me</title>
        <meta
          name="description"
          content="Learn more about Boobalan V — Software Developer and Full-Stack Developer experienced in Angular, Node.js, NestJS, PHP, PostgreSQL, MongoDB, and AI/MCP integrations."
        />
      </Head>
      <Layout>
        <article className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
          <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 max-lg:p-16 max-md:p-12 max-sm:p-8 pt-16">
            <AnimatedText
              text="Passion Fuels Purpose!"
              className="mb-16 !text-8xl xl:!text-7xl max-lg:!text-6xl max-md:!text-5xl max-sm:!text-4xl"
            />

            <div className="grid w-full grid-cols-8 gap-16 max-md:gap-8 max-sm:gap-6">
              {/* Bio Column */}
              <div className="col-span-3 flex flex-col items-start justify-start max-xl:col-span-4 max-md:col-span-8 max-md:order-2">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  BIOGRAPHY
                </h2>
                <p className="font-medium">
                  Hi, I&apos;m <strong>Boobalan V</strong>, a Software Developer &amp; Full-Stack Developer based in Chennai, India, with nearly 2 years of professional experience developing and maintaining web applications, APIs, databases, and application deployments.
                </p>
                <p className="my-4 font-medium">
                  Currently at <strong>Megam Technologies</strong>, I contribute to <strong>Datalytics</strong> &mdash; an AI-powered business intelligence platform featuring conversational data analysis, <strong>Model Context Protocol (MCP)</strong> tools, open-source LLM integration, and dynamic report and dashboard generation &mdash; alongside enterprise ERP systems built with <strong>PHP, jQuery, JavaScript, and PostgreSQL</strong>.
                </p>
                <p className="font-medium">
                  With hands-on expertise in <strong>Angular, Node.js, NestJS, SQL database objects, Nginx, Apache, and GitLab CI/CD</strong>, I focus on building reliable, scalable software that turns complex operational workflows into clean user experiences.
                </p>
              </div>

              {/* Profile Image Box Column */}
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark max-xl:col-span-4 max-md:col-span-8 max-md:order-1 max-sm:p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <div className="relative w-full h-[380px] max-md:h-[300px] max-sm:h-[230px] rounded-2xl overflow-hidden">
                  <Image
                    src={profilePic}
                    alt="Boobalan V"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>

              {/* Stats Column */}
              <div className="col-span-2 flex flex-col items-end justify-between max-xl:col-span-8 max-xl:flex-row max-xl:items-center max-md:order-3">
                <div className="flex flex-col items-end justify-center max-xl:items-center">
                  <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                    <AnimatedNumbers value={2} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-base max-sm:text-xs">
                    Years Experience
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center max-xl:items-center">
                  <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                    <AnimatedNumbers value={80} />%
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-base max-sm:text-xs">
                    B.Tech IT (First Class)
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center max-xl:items-center">
                  <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                    <AnimatedNumbers value={6} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-base max-sm:text-xs">
                    Credentials &amp; Award
                  </h2>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-32">
              <h2 className="font-bold text-8xl mb-16 w-full text-center max-md:text-6xl max-sm:text-4xl max-md:mb-8">
                Skills
              </h2>
              <div className="w-full h-[65vh] max-h-[550px] my-8 relative flex items-center justify-center rounded-3xl bg-light dark:bg-dark border border-solid border-dark/10 dark:border-light/10 shadow-lg overflow-hidden max-lg:h-[55vh] max-sm:h-[45vh]">
                <svg
                  className="absolute inset-0 w-full h-full text-dark/30 dark:text-light/30 pointer-events-none"
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="none"
                >
                  <ellipse cx="500" cy="300" rx="170" ry="95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                  <ellipse cx="500" cy="300" rx="320" ry="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                  <ellipse cx="500" cy="300" rx="440" ry="250" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>

                {/* Center Core Skill */}
                <motion.div
                  className="flex items-center justify-center rounded-full font-bold bg-primary text-light dark:bg-primaryDark dark:text-dark py-3 px-7 shadow-xl cursor-pointer text-base z-20 max-sm:py-2 max-sm:px-4 max-sm:text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  Full-Stack
                </motion.div>

                {/* Inner Ring */}
                <Skill name="Angular" left="50%" top="34%" />
                <Skill name="Node.js" left="50%" top="66%" />
                <Skill name="NestJS" left="33%" top="50%" />
                <Skill name="PostgreSQL" left="67%" top="50%" />

                {/* Middle Ring */}
                <Skill name="MCP & LLM" left="50%" top="20%" />
                <Skill name="PHP" left="76%" top="33%" />
                <Skill name="MongoDB" left="82%" top="50%" />
                <Skill name="Express.js" left="68%" top="74%" />
                <Skill name="REST APIs" left="22%" top="33%" />

                {/* Outer Ring */}
                <Skill name="GitLab CI/CD" left="12%" top="52%" />
                <Skill name="Nginx & Apache" left="24%" top="78%" />
                <Skill name="JavaScript" left="82%" top="76%" />
                <Skill name="MySQL" left="84%" top="20%" />
              </div>

              {/* Structured Skill Categories Grid */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {skillCategories.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-solid border-dark/25 dark:border-light/25 bg-light dark:bg-dark p-6 shadow-md"
                  >
                    <h3 className="text-lg font-bold text-primary dark:text-primaryDark mb-3">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-semibold rounded-full border border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Education Section */}
            <div className="mt-32">
              <h2 className="font-bold text-8xl mb-16 w-full text-center max-md:text-6xl max-sm:text-4xl">
                Experience &amp; Education
              </h2>
              <div className="w-[80%] mx-auto relative max-lg:w-[92%] max-md:w-full">
                <ul className="w-full flex flex-col items-start justify-between">
                  <Details
                    position="Software Developer"
                    company="Megam Technologies"
                    time="December 2024 – Present"
                    address="Chennai, India"
                    bullets={[
                      "Datalytics (BI & Analytics Platform): Developed and maintained features including MCP server tools for AI-assisted interaction with platform data and functionality.",
                      "Integrated an open-source LLM to answer natural-language questions about business data and generate reports & dashboards covering working hours, time spent, and issue metrics.",
                      "Supported comparative analysis of employee work activity and time allocation alongside bug fixes, enhancements, and maintenance.",
                      "ERP — Tannery Application: Developed and maintained features using PHP, jQuery, JavaScript, and PostgreSQL; built CRUD workflows, SQL queries, views, materialized views, functions, and triggers.",
                      "Deployment & Operations: Configured Nginx and Apache web servers, worked with GitLab CI/CD pipelines, Git, and Postman for API testing.",
                    ]}
                  />
                  <Details
                    position="Junior Full-Stack Developer (Intern)"
                    company="Shiash Info Solutions Private Limited"
                    time="March 2023 – May 2023"
                    address="Chennai, India"
                    bullets={[
                      "Contributed to full-stack web development tasks using HTML, CSS, and JavaScript.",
                      "Assisted with feature implementation and debugging within an established software development team and workflow.",
                    ]}
                    docLink="/assets/docs/BOOBALAN%20V%20internship.pdf"
                    docLabel="View Internship Certificate"
                  />
                  <Details
                    position="B.Tech — Information Technology"
                    company="Mohamed Sathak A J College of Engineering"
                    time="2020 – 2024"
                    address="Chennai, India | 80% (First Class)"
                    bullets={[
                      "Completed Bachelor of Technology in Information Technology with First Class (80%) distinction.",
                      "Built academic and personal projects spanning computer vision (KYAAT), Android development, and full-stack web applications.",
                    ]}
                  />
                </ul>
              </div>
            </div>

            {/* Recognition & Credentials Teaser */}
            <div className="mt-32">
              <h2 className="font-bold text-8xl mb-16 w-full text-center max-md:text-6xl max-sm:text-4xl">
                Awards &amp; Certifications
              </h2>
              <div className="grid grid-cols-2 gap-8 w-[85%] mx-auto max-md:grid-cols-1 max-sm:w-full">
                {/* Versatile Rockstar Award */}
                <div className="col-span-2 max-md:col-span-1 rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark shadow-xl flex items-center justify-between gap-6 max-md:flex-col max-md:text-center">
                  <div>
                    <span className="text-primary font-semibold dark:text-primaryDark text-sm uppercase">
                      EXCELLENCE AWARD &bull; 2026
                    </span>
                    <h3 className="text-2xl font-bold dark:text-light mt-1">
                      The Versatile Rockstar Award — Megam Technologies
                    </h3>
                    <p className="font-medium text-dark/75 dark:text-light/75 mt-1">
                      Awarded certificate and trophy for excellence and dedication in software engineering (2026).
                    </p>
                  </div>
                  <Link
                    href="/articles"
                    className="shrink-0 px-5 py-2.5 rounded-full border border-dark bg-dark text-light dark:border-light dark:bg-light dark:text-dark font-bold text-sm hover:opacity-85 transition-opacity"
                  >
                    View Award Photos &amp; Certs &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-solid border-dark/30 bg-light p-6 dark:border-light/30 dark:bg-dark shadow-md">
                  <span className="text-sm font-semibold text-primary dark:text-primaryDark">SPOKEN TUTORIAL / CODETANTRA</span>
                  <h3 className="text-xl font-bold dark:text-light mt-1">Python &amp; Java Programming</h3>
                  <p className="text-sm font-medium text-dark/70 dark:text-light/70 mt-1">
                    Spoken Tutorial Project at IIT Bombay (Python), HackerRank Python, and CodeTantra Java.
                  </p>
                </div>

                <div className="rounded-2xl border border-solid border-dark/30 bg-light p-6 dark:border-light/30 dark:bg-dark shadow-md">
                  <span className="text-sm font-semibold text-primary dark:text-primaryDark">INFOSYS SPRINGBOARD &amp; GUVI</span>
                  <h3 className="text-xl font-bold dark:text-light mt-1">Full-Stack &amp; Node.js Development</h3>
                  <p className="text-sm font-medium text-dark/70 dark:text-light/70 mt-1">
                    Full Stack Development &amp; Node.js certifications from Infosys Springboard and GUVI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
