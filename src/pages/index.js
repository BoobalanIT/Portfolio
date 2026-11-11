import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";
import profilePic from "../../public/assets/images/Pic1.jpg";

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-6 h-auto ml-1 md:!w-4"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Boobalan V | Software Developer &amp; Full-Stack Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Boobalan V — Software Developer and Full-Stack Developer experienced in Angular, Node.js, NestJS, PHP, PostgreSQL, MongoDB, MCP, and AI integrations."
        />
      </Head>
      <Layout>
        <article className="relative flex min-h-[calc(100vh-6rem)] items-center text-dark dark:text-light max-lg:min-h-fit max-lg:items-start">
          <div className="z-0 inline-block w-full bg-light px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32 lg:py-12 dark:bg-dark">
            <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              {/* Profile Image */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-4 border-dark dark:border-light shadow-2xl">
                  <Image
                    src={profilePic}
                    alt="Boobalan V"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 420px"
                    priority
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-start text-center lg:text-left self-center">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary dark:text-primaryDark mb-2">
                  Software Developer &bull; Full-Stack Developer
                </span>
                <AnimatedText
                  text="Building Full-Stack & AI-Powered Solutions."
                  className="!text-3xl sm:!text-4xl md:!text-5xl xl:!text-6xl !text-center lg:!text-left"
                />
                <p className="my-4 text-sm sm:text-base font-medium max-w-2xl">
                  Hi, I&apos;m <strong>Boobalan V</strong>, a Software Developer with nearly 2 years of experience building web applications, REST APIs, and database-driven platforms using <strong>Angular, Node.js, NestJS, PHP, PostgreSQL, and MongoDB</strong> &mdash; including AI-powered business intelligence with <strong>Model Context Protocol (MCP)</strong> and open-source LLM integration.
                </p>
                <div className="mt-2 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                  <a
                    href="/assets/docs/Boobalan%20V%20%E2%80%94%20Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center rounded-lg border-2 border-solid border-dark bg-dark px-4 py-2 sm:px-6 sm:py-2.5 text-base sm:text-lg font-semibold capitalize text-light hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-colors"
                  >
                    Resume
                    <DownloadIcon />
                  </a>
                  <Link
                    href="/projects"
                    className="rounded-lg border-2 border-solid border-dark px-4 py-2 sm:px-5 sm:py-2.5 text-base sm:text-lg font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base sm:text-lg font-medium capitalize text-dark underline dark:text-light px-1"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* HireMe rotating badge */}
          <HireMe />

          {/* Light Bulb decoration */}
          <div className="absolute right-8 bottom-8 hidden lg:inline-block w-20 xl:w-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/svgs/miscellaneous_icons_1.svg"
              alt="Decorative lightbulb"
              className="relative h-auto w-full"
            />
          </div>
        </article>
      </Layout>
    </>
  );
}
