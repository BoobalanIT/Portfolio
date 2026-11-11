import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import awardPhoto1 from "../../public/assets/images/Award.JPG";
import awardPhoto2 from "../../public/assets/images/gift.JPG";

const CertificateRow = ({ title, category, issuer, link }) => {
  return (
    <motion.li
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="w-full p-5 py-6 my-4 rounded-xl flex items-center justify-between gap-4 bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light max-md:flex-col max-md:items-start"
    >
      <div className="flex flex-col">
        <span className="text-xs text-primary font-bold dark:text-primaryDark uppercase">
          {category}
        </span>
        <h3 className="text-xl font-bold max-sm:text-base mt-1">{title}</h3>
        <span className="text-sm font-medium text-dark/70 dark:text-light/70 mt-0.5">
          {issuer}
        </span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 px-4 py-2 rounded-lg bg-dark text-light dark:bg-light dark:text-dark font-semibold text-sm hover:opacity-85 transition-opacity"
      >
        View Certificate &rarr;
      </a>
    </motion.li>
  );
};

export default function Credentials() {
  return (
    <>
      <Head>
        <title>Boobalan V | Achievements &amp; Certifications</title>
        <meta
          name="description"
          content="Explore Boobalan V's awards, internship credentials, and verified software engineering certifications."
        />
      </Head>
      <Layout>
        <article className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 max-lg:p-16 max-md:p-12 max-sm:p-6 max-xs:p-3 pt-16">
            <AnimatedText
              text="Milestones & Credentials!"
              className="mb-16 !text-8xl xl:!text-7xl max-lg:!text-6xl max-md:!text-5xl max-sm:!text-3xl max-xs:!text-2xl"
            />

            {/* Featured Award Section */}
            <section className="rounded-3xl border-2 border-solid border-dark bg-light p-10 shadow-2xl dark:border-light dark:bg-dark max-md:p-6 mb-20">
              <div className="flex flex-col items-start mb-8">
                <span className="text-primary font-bold dark:text-primaryDark text-sm uppercase tracking-wider">
                  ACHIEVEMENT &bull; MEGAM TECHNOLOGIES &bull; 2026
                </span>
                <h2 className="my-2 text-4xl font-bold dark:text-light max-sm:text-2xl">
                  The Versatile Rockstar Award (2026)
                </h2>
                <p className="font-medium text-dark/85 dark:text-light/85 max-w-3xl">
                  Honored with a certificate and trophy at Megam Technologies&apos; 15th Anniversary celebration for excellence, versatility, and dedication in software development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <div className="relative h-[380px] max-sm:h-[260px] rounded-2xl overflow-hidden border border-dark/20 dark:border-light/20">
                  <Image
                    src={awardPhoto1}
                    alt="Boobalan V receiving The Versatile Rockstar Award trophy and certificate at Megam Technologies"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="relative h-[380px] max-sm:h-[260px] rounded-2xl overflow-hidden border border-dark/20 dark:border-light/20">
                  <Image
                    src={awardPhoto2}
                    alt="Boobalan V with The Versatile Rockstar Award certificate at Megam Technologies 15th Anniversary"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </section>

            {/* Internship & Resume Documents */}
            <section className="grid grid-cols-2 gap-8 max-md:grid-cols-1 mb-20">
              <div className="rounded-2xl border border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary dark:text-primaryDark uppercase">
                    INTERNSHIP CREDENTIAL &bull; MAR 2023 – MAY 2023
                  </span>
                  <h3 className="text-2xl font-bold dark:text-light mt-2">
                    Junior Full-Stack Developer — Shiash Info Solutions
                  </h3>
                  <p className="text-sm font-medium text-dark/80 dark:text-light/80 mt-2">
                    Official internship completion document recognizing contributions to full-stack web development using HTML, CSS, and JavaScript.
                  </p>
                </div>
                <a
                  href="/assets/docs/BOOBALAN%20V%20internship.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 w-max px-5 py-2.5 rounded-lg bg-dark text-light dark:bg-light dark:text-dark font-semibold text-sm hover:opacity-85 transition-opacity"
                >
                  Open Internship PDF &rarr;
                </a>
              </div>

              <div className="rounded-2xl border border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary dark:text-primaryDark uppercase">
                    UPDATED CURRICULUM VITAE
                  </span>
                  <h3 className="text-2xl font-bold dark:text-light mt-2">
                    Boobalan V — Software Developer Resume
                  </h3>
                  <p className="text-sm font-medium text-dark/80 dark:text-light/80 mt-2">
                    Complete summary of experience at Megam Technologies and Shiash Info Solutions, technical stack, projects, education, and awards.
                  </p>
                </div>
                <a
                  href="/assets/docs/Boobalan%20V%20%E2%80%94%20Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 w-max px-5 py-2.5 rounded-lg bg-dark text-light dark:bg-light dark:text-dark font-semibold text-sm hover:opacity-85 transition-opacity"
                >
                  Open Resume PDF &rarr;
                </a>
              </div>
            </section>

            {/* All Verified Certificates */}
            <h2 className="font-bold text-4xl w-full text-center my-12 dark:text-light">
              Verified Certifications
            </h2>
            <ul className="w-full">
              <CertificateRow
                title="Python Programming — Spoken Tutorial Project at IIT Bombay"
                category="Python Programming"
                issuer="Spoken Tutorial / IIT Bombay"
                link="/assets/docs/Certificates/Python%20IIT%20Bombay.pdf"
              />
              <CertificateRow
                title="Full Stack Development"
                category="Full-Stack Engineering"
                issuer="Infosys Springboard"
                link="/assets/docs/Certificates/Full%20stack%20in%20infosys.pdf"
              />
              <CertificateRow
                title="Node.js Development"
                category="Backend Engineering"
                issuer="Infosys Springboard"
                link="/assets/docs/Certificates/NODE.JS.pdf"
              />
              <CertificateRow
                title="Java Programming Course"
                category="Programming"
                issuer="CodeTantra"
                link="/assets/docs/Certificates/Codetantra.pdf"
              />
              <CertificateRow
                title="Fullstack Development"
                category="Web Development"
                issuer="GUVI"
                link="/assets/docs/Certificates/Guvi.png"
              />
              <CertificateRow
                title="Python (Basic) Problem Solving"
                category="Programming"
                issuer="HackerRank"
                link="/assets/docs/Certificates/Python%20from%20HR.pdf"
              />
            </ul>
          </div>
        </article>
      </Layout>
    </>
  );
}
