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
        <article className="relative flex min-h-[calc(100vh-6rem)] items-center text-dark dark:text-light max-md:min-h-fit max-md:items-start">
          <div className="z-0 inline-block w-full bg-light px-32 py-12 dark:bg-dark max-xl:px-24 max-lg:px-16 max-md:px-12 max-sm:px-8 max-md:py-10">
            <div className="flex w-full items-center justify-between max-md:flex-col">
              {/* Profile Image */}
              <div className="w-1/2 max-md:w-full max-md:mb-8 flex items-center justify-center">
                <div className="relative w-[480px] h-[480px] xl:w-[360px] xl:h-[360px] max-md:w-[280px] max-md:h-[280px] max-sm:w-[220px] max-sm:h-[220px] rounded-full overflow-hidden border-4 border-dark dark:border-light shadow-2xl">
                  <Image
                    src={profilePic}
                    alt="Boobalan V"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 280px, 480px"
                    priority
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex w-1/2 flex-col items-center self-center max-lg:w-full max-lg:text-center">
                <span className="self-start max-lg:self-center text-sm font-bold uppercase tracking-widest text-primary dark:text-primaryDark mb-2">
                  Software Developer &bull; Full-Stack Developer
                </span>
                <AnimatedText
                  text="Building Full-Stack & AI-Powered Solutions."
                  className="!text-left !text-6xl xl:!text-5xl max-lg:!text-center max-lg:!text-6xl max-md:!text-5xl max-sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium max-md:text-sm max-sm:!text-xs">
                  Hi, I&apos;m <strong>Boobalan V</strong>, a Software Developer with nearly 2 years of experience building web applications, REST APIs, and database-driven platforms using <strong>Angular, Node.js, NestJS, PHP, PostgreSQL, and MongoDB</strong> &mdash; including AI-powered business intelligence with <strong>Model Context Protocol (MCP)</strong> and open-source LLM integration.
                </p>
                <div className="mt-2 flex items-center self-start max-lg:self-center gap-4 flex-wrap">
                  <a
                    href="/assets/docs/Boobalan%20V%20%E2%80%94%20Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center rounded-lg border-2 border-solid border-dark bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light max-md:p-2 max-md:px-4 max-md:text-base"
                  >
                    Resume
                    <DownloadIcon />
                  </a>
                  <Link
                    href="/projects"
                    className="rounded-lg border-2 border-solid border-dark px-5 py-2.5 text-lg font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark max-md:p-2 max-md:px-4 max-md:text-base transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium capitalize text-dark underline dark:text-light max-md:text-base"
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
          <div className="absolute right-8 bottom-8 inline-block w-24 max-md:hidden">
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
